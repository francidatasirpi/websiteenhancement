import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { useState, useCallback, useEffect, useRef } from 'react';
import { Node, mergeAttributes } from '@tiptap/core';
import {
    FiBold, FiItalic, FiUnderline, FiList, FiLink, FiImage,
    FiCode, FiMinus, FiAlignLeft, FiAlignCenter, FiAlignRight,
    FiCheckSquare, FiTable, FiEye, FiEdit3, FiColumns, FiInfo,
    FiAlertTriangle, FiAlertCircle, FiHelpCircle, FiMaximize2, FiMinimize2,
    FiClock, FiSave, FiCheck, FiX
} from 'react-icons/fi';
import { uploadImage } from '../services/api';

const lowlight = createLowlight(common);

// Custom Callout Extension
const Callout = Node.create({
    name: 'callout',
    group: 'block',
    content: 'block+',
    defining: true,

    addAttributes() {
        return {
            type: {
                default: 'info',
            },
        };
    },

    parseHTML() {
        return [{ tag: 'div[data-callout]' }];
    },

    renderHTML({ node, HTMLAttributes }) {
        return ['div', mergeAttributes(HTMLAttributes, {
            'data-callout': '',
            'class': `callout callout-${node.attrs.type}`
        }), 0];
    },
});

// Slash commands configuration
const SLASH_COMMANDS = [
    { title: 'Heading 1', desc: 'Large section heading', icon: 'H1', command: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run() },
    { title: 'Heading 2', desc: 'Medium section heading', icon: 'H2', command: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { title: 'Heading 3', desc: 'Small section heading', icon: 'H3', command: (editor) => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { title: 'Bullet List', desc: 'Create a bullet list', icon: '•', command: (editor) => editor.chain().focus().toggleBulletList().run() },
    { title: 'Numbered List', desc: 'Create a numbered list', icon: '1.', command: (editor) => editor.chain().focus().toggleOrderedList().run() },
    { title: 'Task List', desc: 'Create a todo list', icon: '☑', command: (editor) => editor.chain().focus().toggleTaskList().run() },
    { title: 'Quote', desc: 'Add a blockquote', icon: '"', command: (editor) => editor.chain().focus().toggleBlockquote().run() },
    { title: 'Code Block', desc: 'Add a code block', icon: '</>', command: (editor) => editor.chain().focus().toggleCodeBlock().run() },
    { title: 'Table', desc: 'Insert a table', icon: '⊞', command: (editor) => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run() },
    { title: 'Divider', desc: 'Insert horizontal line', icon: '—', command: (editor) => editor.chain().focus().setHorizontalRule().run() },
    { title: 'Info Callout', desc: 'Add an info box', icon: 'ℹ', command: (editor) => insertCallout(editor, 'info') },
    { title: 'Warning Callout', desc: 'Add a warning box', icon: '⚠', command: (editor) => insertCallout(editor, 'warning') },
    { title: 'Tip Callout', desc: 'Add a tip box', icon: '💡', command: (editor) => insertCallout(editor, 'tip') },
];

function insertCallout(editor, type) {
    editor.chain().focus().insertContent({
        type: 'callout',
        attrs: { type },
        content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Add your note here...' }] }],
    }).run();
}

function MenuButton({ onClick, isActive, children, title, disabled }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`toolbar-btn ${isActive ? 'active' : ''}`}
            title={title}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

function MenuDropdown({ label, children, title }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="toolbar-dropdown" onMouseLeave={() => setOpen(false)}>
            <button
                type="button"
                className="toolbar-btn toolbar-dropdown-btn"
                onClick={() => setOpen(!open)}
                title={title}
            >
                {label} ▾
            </button>
            {open && (
                <div className="toolbar-dropdown-menu" onClick={() => setOpen(false)}>
                    {children}
                </div>
            )}
        </div>
    );
}

function SlashCommandMenu({ editor, commands, position, onSelect, selectedIndex }) {
    if (!position) return null;

    return (
        <div className="slash-menu" style={{ top: position.top, left: position.left }}>
            <div className="slash-menu-header">Quick Actions</div>
            {commands.map((cmd, index) => (
                <div
                    key={cmd.title}
                    className={`slash-menu-item ${index === selectedIndex ? 'selected' : ''}`}
                    onClick={() => onSelect(cmd)}
                >
                    <div className="slash-menu-icon">{cmd.icon}</div>
                    <div className="slash-menu-content">
                        <div className="slash-menu-title">{cmd.title}</div>
                        <div className="slash-menu-desc">{cmd.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function AutoSaveIndicator({ status, lastSaved }) {
    const getStatusText = () => {
        switch (status) {
            case 'saving': return 'Saving...';
            case 'saved': return lastSaved ? `Saved ${formatTime(lastSaved)}` : 'Saved';
            case 'error': return 'Save failed';
            default: return 'Auto-save enabled';
        }
    };

    return (
        <div className={`autosave-indicator ${status}`}>
            {status === 'saving' && <div className="pulse-dot" />}
            {status === 'saved' && <FiCheck size={12} />}
            {status === 'error' && <FiX size={12} />}
            <span>{getStatusText()}</span>
        </div>
    );
}

function formatTime(date) {
    const now = new Date();
    const diff = now - date;
    if (diff < 60000) return 'just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function RichTextEditor({
    content,
    onChange,
    showPreview = true,
    autoSave = false,
    onAutoSave,
    versions = [],
    onRestoreVersion
}) {
    const [viewMode, setViewMode] = useState('edit');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showVersions, setShowVersions] = useState(false);
    const [autoSaveStatus, setAutoSaveStatus] = useState('idle');
    const [lastSaved, setLastSaved] = useState(null);
    const [slashCommand, setSlashCommand] = useState({ show: false, query: '', position: null });
    const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
    const autoSaveTimerRef = useRef(null);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            Image.configure({
                HTMLAttributes: { class: 'editor-image' },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: { class: 'editor-link' },
            }),
            Placeholder.configure({
                placeholder: 'Start writing... Type "/" for quick commands',
            }),
            Table.configure({
                resizable: true,
                HTMLAttributes: { class: 'editor-table' },
            }),
            TableRow,
            TableCell,
            TableHeader,
            TaskList,
            TaskItem.configure({ nested: true }),
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Underline,
            Highlight.configure({ multicolor: true }),
            CodeBlockLowlight.configure({ lowlight }),
            Callout,
        ],
        content: content || '',
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onChange(html);

            // Trigger auto-save after changes
            if (autoSave && onAutoSave) {
                if (autoSaveTimerRef.current) {
                    clearTimeout(autoSaveTimerRef.current);
                }
                autoSaveTimerRef.current = setTimeout(() => {
                    handleAutoSave(html);
                }, 2000);
            }
        },
    });

    const handleAutoSave = async (html) => {
        if (!onAutoSave) return;

        setAutoSaveStatus('saving');
        try {
            await onAutoSave(html);
            setAutoSaveStatus('saved');
            setLastSaved(new Date());
        } catch (error) {
            setAutoSaveStatus('error');
        }
    };

    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content || '');
        }
    }, [content]);

    useEffect(() => {
        return () => {
            if (autoSaveTimerRef.current) {
                clearTimeout(autoSaveTimerRef.current);
            }
        };
    }, []);

    // Keyboard shortcuts for slash commands
    useEffect(() => {
        if (!editor) return;

        const handleKeyDown = (e) => {
            if (slashCommand.show) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedCommandIndex(prev =>
                        prev < filteredCommands.length - 1 ? prev + 1 : 0
                    );
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedCommandIndex(prev =>
                        prev > 0 ? prev - 1 : filteredCommands.length - 1
                    );
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    const cmd = filteredCommands[selectedCommandIndex];
                    if (cmd) selectCommand(cmd);
                } else if (e.key === 'Escape') {
                    setSlashCommand({ show: false, query: '', position: null });
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [editor, slashCommand, selectedCommandIndex]);

    const filteredCommands = SLASH_COMMANDS.filter(cmd =>
        cmd.title.toLowerCase().includes(slashCommand.query.toLowerCase())
    );

    const selectCommand = (cmd) => {
        // Delete the slash and query
        const { from } = editor.state.selection;
        const queryLength = slashCommand.query.length + 1; // +1 for the "/"
        editor.chain().focus().deleteRange({ from: from - queryLength, to: from }).run();

        // Execute the command
        cmd.command(editor);
        setSlashCommand({ show: false, query: '', position: null });
    };

    // Check for slash commands
    useEffect(() => {
        if (!editor) return;

        const checkSlashCommand = () => {
            const { from } = editor.state.selection;
            const textBefore = editor.state.doc.textBetween(Math.max(0, from - 20), from);
            const slashMatch = textBefore.match(/\/(\w*)$/);

            if (slashMatch) {
                const rect = editor.view.coordsAtPos(from);
                setSlashCommand({
                    show: true,
                    query: slashMatch[1],
                    position: { top: rect.bottom + 5, left: rect.left },
                });
                setSelectedCommandIndex(0);
            } else {
                setSlashCommand({ show: false, query: '', position: null });
            }
        };

        editor.on('selectionUpdate', checkSlashCommand);
        editor.on('update', checkSlashCommand);

        return () => {
            editor.off('selectionUpdate', checkSlashCommand);
            editor.off('update', checkSlashCommand);
        };
    }, [editor]);

    const addImage = useCallback(async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const res = await uploadImage(file);
                    editor.chain().focus().setImage({ src: res.data.url }).run();
                } catch (error) {
                    console.error('Failed to upload image:', error);
                    alert('Failed to upload image');
                }
            }
        };
        input.click();
    }, [editor]);

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('Enter URL:', previousUrl);

        if (url === null) return;
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }, [editor]);

    const insertTable = useCallback(() => {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    }, [editor]);

    const insertCalloutFn = useCallback((type) => {
        insertCallout(editor, type);
    }, [editor]);

    if (!editor) {
        return null;
    }

    const renderToolbar = () => (
        <div className="editor-toolbar">
            {/* Text formatting */}
            <div className="toolbar-group">
                <MenuDropdown label="Heading" title="Headings">
                    <button onClick={() => editor.chain().focus().setParagraph().run()}>Paragraph</button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>Heading 1</button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Heading 2</button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>Heading 3</button>
                </MenuDropdown>
            </div>

            <div className="toolbar-divider" />

            {/* Basic formatting */}
            <div className="toolbar-group">
                <MenuButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Bold (Ctrl+B)">
                    <FiBold />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Italic (Ctrl+I)">
                    <FiItalic />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive('underline')} title="Underline (Ctrl+U)">
                    <FiUnderline />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleHighlight().run()} isActive={editor.isActive('highlight')} title="Highlight">
                    ✨
                </MenuButton>
            </div>

            <div className="toolbar-divider" />

            {/* Text alignment */}
            <div className="toolbar-group">
                <MenuButton onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left">
                    <FiAlignLeft />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center">
                    <FiAlignCenter />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right">
                    <FiAlignRight />
                </MenuButton>
            </div>

            <div className="toolbar-divider" />

            {/* Lists */}
            <div className="toolbar-group">
                <MenuButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List">
                    <FiList />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Numbered List">
                    1.
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleTaskList().run()} isActive={editor.isActive('taskList')} title="Task List">
                    <FiCheckSquare />
                </MenuButton>
            </div>

            <div className="toolbar-divider" />

            {/* Insert elements */}
            <div className="toolbar-group">
                <MenuButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Quote">
                    "
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} isActive={editor.isActive('codeBlock')} title="Code Block">
                    <FiCode />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
                    <FiMinus />
                </MenuButton>
            </div>

            <div className="toolbar-divider" />

            {/* Tables & Callouts */}
            <div className="toolbar-group">
                <MenuButton onClick={insertTable} title="Insert Table">
                    <FiTable />
                </MenuButton>
                <MenuDropdown label="Callout" title="Insert Callout">
                    <button onClick={() => insertCalloutFn('info')}><FiInfo /> Info</button>
                    <button onClick={() => insertCalloutFn('success')}><FiCheckSquare /> Success</button>
                    <button onClick={() => insertCalloutFn('warning')}><FiAlertTriangle /> Warning</button>
                    <button onClick={() => insertCalloutFn('error')}><FiAlertCircle /> Error</button>
                    <button onClick={() => insertCalloutFn('tip')}><FiHelpCircle /> Tip</button>
                </MenuDropdown>
            </div>

            <div className="toolbar-divider" />

            {/* Media */}
            <div className="toolbar-group">
                <MenuButton onClick={setLink} isActive={editor.isActive('link')} title="Add Link">
                    <FiLink />
                </MenuButton>
                <MenuButton onClick={addImage} title="Add Image">
                    <FiImage />
                </MenuButton>
            </div>

            {/* View controls - right side */}
            <div className="toolbar-right">
                {versions.length > 0 && (
                    <MenuButton onClick={() => setShowVersions(!showVersions)} title="Version History" isActive={showVersions}>
                        <FiClock />
                    </MenuButton>
                )}

                {showPreview && (
                    <div className="toolbar-group view-toggle">
                        <MenuButton onClick={() => setViewMode('edit')} isActive={viewMode === 'edit'} title="Edit Mode">
                            <FiEdit3 />
                        </MenuButton>
                        <MenuButton onClick={() => setViewMode('split')} isActive={viewMode === 'split'} title="Split View">
                            <FiColumns />
                        </MenuButton>
                        <MenuButton onClick={() => setViewMode('preview')} isActive={viewMode === 'preview'} title="Preview Mode">
                            <FiEye />
                        </MenuButton>
                    </div>
                )}
                <MenuButton onClick={() => setIsFullscreen(!isFullscreen)} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
                    {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                </MenuButton>
            </div>
        </div>
    );

    const renderTableMenu = () => {
        if (!editor.isActive('table')) return null;

        return (
            <div className="table-menu">
                <button onClick={() => editor.chain().focus().addColumnBefore().run()}>Add Column Before</button>
                <button onClick={() => editor.chain().focus().addColumnAfter().run()}>Add Column After</button>
                <button onClick={() => editor.chain().focus().deleteColumn().run()}>Delete Column</button>
                <button onClick={() => editor.chain().focus().addRowBefore().run()}>Add Row Before</button>
                <button onClick={() => editor.chain().focus().addRowAfter().run()}>Add Row After</button>
                <button onClick={() => editor.chain().focus().deleteRow().run()}>Delete Row</button>
                <button onClick={() => editor.chain().focus().deleteTable().run()}>Delete Table</button>
            </div>
        );
    };

    const renderVersionPanel = () => {
        if (!showVersions) return null;

        return (
            <div className="version-panel">
                <div className="version-panel-header">
                    <span className="version-panel-title"><FiClock /> Version History</span>
                    <button className="version-panel-close" onClick={() => setShowVersions(false)}>×</button>
                </div>
                <div className="version-list">
                    {versions.length === 0 ? (
                        <div className="empty-state">
                            <p>No versions yet</p>
                        </div>
                    ) : (
                        versions.map((version, index) => (
                            <div
                                key={version.id || index}
                                className={`version-item ${index === 0 ? 'active' : ''}`}
                                onClick={() => onRestoreVersion && onRestoreVersion(version)}
                            >
                                <div className="version-time">
                                    {new Date(version.created_at).toLocaleString()}
                                </div>
                                <div className="version-meta">
                                    <span>{version.author || 'Auto-save'}</span>
                                    <span>•</span>
                                    <span>{version.content?.length || 0} chars</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="version-actions">
                    <button className="btn btn-secondary btn-sm" onClick={() => setShowVersions(false)}>Close</button>
                </div>
            </div>
        );
    };

    return (
        <div className={`editor-container ${isFullscreen ? 'fullscreen' : ''} ${viewMode}`}>
            {renderToolbar()}
            {editor.isActive('table') && renderTableMenu()}

            <div className="editor-body">
                {(viewMode === 'edit' || viewMode === 'split') && (
                    <div className="editor-content">
                        <EditorContent editor={editor} />
                        {slashCommand.show && (
                            <SlashCommandMenu
                                editor={editor}
                                commands={filteredCommands}
                                position={slashCommand.position}
                                onSelect={selectCommand}
                                selectedIndex={selectedCommandIndex}
                            />
                        )}
                    </div>
                )}

                {(viewMode === 'preview' || viewMode === 'split') && (
                    <div className="editor-preview">
                        <div className="preview-header">
                            <FiEye /> Preview
                        </div>
                        <div
                            className="preview-content blog-content"
                            dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
                        />
                    </div>
                )}
            </div>

            <div className="editor-footer">
                <span>
                    Type <kbd>/</kbd> for commands • <kbd>Ctrl+B</kbd> Bold • <kbd>Ctrl+I</kbd> Italic • <kbd>Ctrl+U</kbd> Underline
                </span>
                {autoSave && (
                    <AutoSaveIndicator status={autoSaveStatus} lastSaved={lastSaved} />
                )}
            </div>

            {renderVersionPanel()}
        </div>
    );
}

export default RichTextEditor;
