import { MdDashboard, MdArticle, MdAdd, MdLogout, MdClose } from 'react-icons/md';

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
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
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
        background: 'linear-gradient(180deg, #0d1a2e 0%, #0a1220 100%)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column',
        zIndex: 40,
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
        className={`md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Top teal accent line */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, #14b8a6, #0ea5e9, transparent)', flexShrink: 0 }} />

        {/* Header */}
        <div style={{
          padding: '1.5rem 1.25rem 1.25rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
                borderRadius: '9px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px', flexShrink: 0,
              }}>🎯</div>
              <div>
                <p style={{
                  fontSize: '16px', fontWeight: '700',
                  background: 'linear-gradient(90deg, #14b8a6, #38bdf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  margin: 0, letterSpacing: '-0.3px',
                }}>Mindframe</p>
                <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0 }}>
                  Admin Panel
                </p>
              </div>
            </div>
            <button
              onClick={onToggleSidebar}
              className="md:hidden"
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px', padding: '6px', cursor: 'pointer',
                color: 'rgba(255,255,255,0.5)', display: 'flex',
              }}
            >
              <MdClose style={{ fontSize: '16px' }} />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', overflowY: 'auto' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0 8px', marginBottom: '8px' }}>
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
                  border: isActive ? '1px solid rgba(20,184,166,0.25)' : '1px solid transparent',
                  background: isActive ? 'linear-gradient(135deg, rgba(20,184,166,0.15), rgba(14,165,233,0.1))' : 'transparent',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '12px',
                  transition: 'all 0.2s',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                {isActive && (
                  <div style={{
                    position: 'absolute', left: 0, top: '20%', bottom: '20%',
                    width: '3px', background: 'linear-gradient(180deg, #14b8a6, #0ea5e9)',
                    borderRadius: '0 4px 4px 0',
                  }} />
                )}
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                  background: isActive ? 'linear-gradient(135deg, rgba(20,184,166,0.3), rgba(14,165,233,0.2))' : 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon style={{ fontSize: '17px', color: isActive ? '#14b8a6' : 'rgba(255,255,255,0.4)' }} />
                </div>
                <div>
                  <p style={{ color: isActive ? '#e2f8f5' : 'rgba(255,255,255,0.65)', fontSize: '13.5px', fontWeight: isActive ? '600' : '400', margin: 0 }}>
                    {item.label}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '11px', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          {/* User card */}
          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '10px', padding: '10px 12px',
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px',
          }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
              background: 'linear-gradient(135deg, #14b8a6, #0ea5e9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px',
            }}>👤</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', fontWeight: '600', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Admin User
              </p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', margin: 0 }}>Administrator</p>
            </div>
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            style={{
              width: '100%', padding: '10px 12px',
              background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '10px', color: 'rgba(248,113,113,0.9)',
              fontSize: '13px', fontWeight: '500', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.15)'; e.currentTarget.style.color = '#f87171'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; e.currentTarget.style.color = 'rgba(248,113,113,0.9)'; }}
          >
            <MdLogout style={{ fontSize: '16px' }} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}