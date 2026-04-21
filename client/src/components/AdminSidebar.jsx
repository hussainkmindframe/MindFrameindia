import { MdDashboard, MdArticle, MdAdd, MdLogout, MdClose } from 'react-icons/md';

const gold = '#c9a84c';

export default function AdminSidebar({ activeTab, setActiveTab, isOpen, onToggleSidebar, onLogout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: MdDashboard, description: 'View overview' },
    { id: 'blogs', label: 'Manage Blogs', icon: MdArticle, description: 'Edit & manage posts' },
    { id: 'add', label: 'Add New Blog', icon: MdAdd, description: 'Create new post' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onToggleSidebar}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(2px)',
            zIndex: 30,
            display: 'block',
          }}
          className="md:hidden"
        />
      )}

      <aside style={{
        position: 'fixed',
        top: 0, left: 0, bottom: 0,
        width: '260px',
        background: '#ffffff',
        borderRight: '1px solid #e8ecef',
        display: 'flex', flexDirection: 'column',
        zIndex: 40,
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
        boxShadow: '2px 0 8px rgba(0,0,0,0.02)',
      }}
        className={`md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Top gold accent line */}
        <div style={{ height: '3px', background: `linear-gradient(90deg, ${gold}, ${gold}66, transparent)`, flexShrink: 0 }} />

        {/* Header */}
        <div style={{
          padding: '1.5rem 1.25rem 1.25rem',
          borderBottom: '1px solid #e8ecef',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px', height: '42px',
                borderRadius: '50%',
                border: `2px solid ${gold}`,
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <div style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 900, color: gold, display: 'block' }}>MF</span>
                  <span style={{ fontSize: 4.5, letterSpacing: 1.5, color: '#888', textTransform: 'uppercase', display: 'block', marginTop: 1 }}>
                    MIND
                  </span>
                </div>
              </div>
              <div>
                <p style={{
                  fontSize: '16px', fontWeight: '700',
                  color: '#1a1a2e',
                  margin: 0, letterSpacing: '-0.3px',
                }}>Mindframe</p>
                <p style={{ color: '#6c757d', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>
                  Admin Panel
                </p>
              </div>
            </div>
            <button
              onClick={onToggleSidebar}
              className="md:hidden"
              style={{
                background: '#f8f9fa', border: '1px solid #e8ecef',
                borderRadius: '8px', padding: '6px', cursor: 'pointer',
                color: '#6c757d', display: 'flex',
              }}
            >
              <MdClose style={{ fontSize: '16px' }} />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
          <p style={{ color: '#adb5bd', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0 8px', marginBottom: '8px', fontWeight: '600' }}>
            Navigation
          </p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 768) onToggleSidebar();
                }}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  border: isActive ? `1px solid ${gold}40` : '1px solid transparent',
                  background: isActive ? `${gold}10` : 'transparent',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '12px',
                  transition: 'all 0.2s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#f8f9fa'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute', left: 0, top: '20%', bottom: '20%',
                    width: '3px', background: gold,
                    borderRadius: '0 4px 4px 0',
                  }} />
                )}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                  background: isActive ? `${gold}15` : '#f8f9fa',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ fontSize: '17px', color: isActive ? gold : '#6c757d' }} />
                </div>
                <div>
                  <p style={{ color: isActive ? '#1a1a2e' : '#495057', fontSize: '13.5px', fontWeight: isActive ? '600' : '400', margin: 0 }}>
                    {item.label}
                  </p>
                  <p style={{ color: '#adb5bd', fontSize: '11px', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '0.75rem', borderTop: '1px solid #e8ecef', flexShrink: 0 }}>
          {/* User card */}
          <div style={{
            background: '#f8f9fa', border: '1px solid #e8ecef',
            borderRadius: '10px', padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px',
          }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
              background: `linear-gradient(135deg, ${gold}, ${gold}99)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', color: '#fff',
            }}>👤</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: '#1a1a2e', fontSize: '13px', fontWeight: '600', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Admin User
              </p>
              <p style={{ color: '#6c757d', fontSize: '11px', margin: 0 }}>Administrator</p>
            </div>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#28a745', flexShrink: 0 }} />
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            style={{
              width: '100%', padding: '10px 12px',
              background: '#f8d7da', border: '1px solid #f5c6cb',
              borderRadius: '10px', color: '#721c24',
              fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#f5c6cb'; e.currentTarget.style.color = '#721c24'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#f8d7da'; e.currentTarget.style.color = '#721c24'; }}
          >
            <MdLogout style={{ fontSize: '16px' }} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}