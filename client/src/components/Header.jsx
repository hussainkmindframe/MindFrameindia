/**
 * Header Component — Responsive (Mindframe India)
 */

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../utils/authStore";
import logo from "../assets/Logo-MFI.png";

const gold = "#c9a84c";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      {
        name: "Branding Solutions",
        children: [
          { name: "Brand Identity", path: "/services/brand-identity" },
          { name: "Brand Services", path: "/services/brand-services" },
          { name: "Above The Line", path: "/services/atl" },
          { name: "Below The Line", path: "/services/btl" },
          { name: "Media Buying", path: "/services/media-buying" },
         { name: "Public Relation", path: "/services/public-realations" },

        ],
      },
      {
  name: "Digital Marketing",
  children: [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Marketing Branding", path: "/services/marketing-branding" },
    { name: "Performance Marketing", path: "/services/performance" },
    { name: "Customized Campaign Design", path: "/services/customize-campaign" },
    { name: "Advertizing Services", path: "/services/advertizing-services" },
  ],
},
      { name: "Creative Solutions", path: "/services/creative" },
      { name: "Website Development", path: "/services/web-development" },
      { name: "Mobile App Development", path: "/services/app-development" },
    ],
  },
  { label: "Our Work", to: "/work" },
  { label: "Client Testimonials", to: "/testimonials" },
  { label: "Blogs", to: "/blogs" },
  { label: "News Room", to: "/News" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState(null);
  const { isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Close desktop dropdown with delay for better UX
  const handleMouseLeaveServices = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
      setActiveSubMenu(null);
    }, 150);
  };

  const handleMouseEnterServices = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseEnterSubMenu = (itemName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveSubMenu(itemName);
  };

  const handleMouseLeaveSubMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 150);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileActiveSubMenu(null);
    setSearchOpen(false);
    setActiveSubMenu(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (to) => location.pathname === to;

  const linkStyle = (to) => ({
    fontSize: 13.5,
    color: "#1a1a1a",
    textDecoration: "none",
    whiteSpace: "nowrap",
    paddingBottom: 3,
    borderBottom: isActive(to) ? `2px solid ${gold}` : "2px solid transparent",
    fontWeight: isActive(to) ? 600 : 400,
    fontFamily: "Georgia, serif",
    transition: "all 0.2s ease",
    cursor: "pointer",
  });

  // Helper to render dropdown items for desktop with proper hover
  const renderDropdownItems = () => {
    const servicesItem = navLinks.find((link) => link.label === "Services");
    if (!servicesItem?.dropdown) return null;

    return servicesItem.dropdown.map((item) => {
      if (item.children) {
        const isSubMenuOpen = activeSubMenu === item.name;
        return (
          <div
            key={item.name}
            style={{ position: "relative" }}
            onMouseEnter={() => handleMouseEnterSubMenu(item.name)}
            onMouseLeave={handleMouseLeaveSubMenu}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 20px",
                fontSize: 13.5,
                color: "#333",
                textDecoration: "none",
                borderBottom: "1px solid #f0f0f0",
                fontFamily: "Georgia, serif",
                cursor: "pointer",
                transition: "all 0.2s ease",
                background: isSubMenuOpen ? "#fafaf8" : "#fff",
              }}
            >
              {item.name}
              <span
                style={{
                  fontSize: 12,
                  color: "#999",
                  transition: "transform 0.2s ease",
                  transform: isSubMenuOpen ? "translateX(3px)" : "none",
                }}
              >
                →
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "100%",
                background: "#fff",
                border: "1px solid #eee",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                minWidth: 220,
                zIndex: 102,
                opacity: isSubMenuOpen ? 1 : 0,
                visibility: isSubMenuOpen ? "visible" : "hidden",
                transform: isSubMenuOpen ? "translateX(0)" : "translateX(-10px)",
                transition: "all 0.25s ease",
                pointerEvents: isSubMenuOpen ? "auto" : "none",
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => {
                    setServicesOpen(false);
                    setActiveSubMenu(null);
                  }}
                  style={{
                    display: "block",
                    padding: "12px 20px",
                    fontSize: 13,
                    color: "#555",
                    textDecoration: "none",
                    borderBottom: "1px solid #f5f5f5",
                    fontFamily: "Georgia, serif",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#fafaf8";
                    e.currentTarget.style.color = gold;
                    e.currentTarget.style.paddingLeft = "24px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#555";
                    e.currentTarget.style.paddingLeft = "20px";
                  }}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setServicesOpen(false)}
          style={{
            display: "block",
            padding: "12px 20px",
            fontSize: 13.5,
            color: "#333",
            textDecoration: "none",
            borderBottom: "1px solid #f0f0f0",
            fontFamily: "Georgia, serif",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fafaf8";
            e.currentTarget.style.color = gold;
            e.currentTarget.style.paddingLeft = "24px";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#333";
            e.currentTarget.style.paddingLeft = "20px";
          }}
        >
          {item.name}
        </Link>
      );
    });
  };

  // Helper to render mobile dropdown items with nested support
  const renderMobileDropdownItems = () => {
    const servicesItem = navLinks.find((link) => link.label === "Services");
    if (!servicesItem?.dropdown) return null;

    return servicesItem.dropdown.map((item) => {
      if (item.children) {
        const isOpen = mobileActiveSubMenu === item.name;
        return (
          <div key={item.name}>
            <button
              onClick={() =>
                setMobileActiveSubMenu(isOpen ? null : item.name)
              }
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 24px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                fontSize: 13.5,
                color: "#555",
                borderBottom: "1px solid #f0f0f0",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              {item.name}
              <span
                style={{
                  fontSize: 12,
                  color: "#999",
                  transition: "transform 0.2s ease",
                  transform: isOpen ? "rotate(90deg)" : "none",
                  display: "inline-block",
                }}
              >
                →
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? 300 : 0,
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "#fafaf8",
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                    setMobileActiveSubMenu(null);
                  }}
                  style={{
                    display: "block",
                    padding: "11px 40px",
                    fontSize: 12.5,
                    color: "#666",
                    textDecoration: "none",
                    borderBottom: "1px solid #eaeaea",
                    fontFamily: "Georgia, serif",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f5f5f0";
                    e.currentTarget.style.color = gold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#666";
                  }}
                >
                  — {child.name}
                </Link>
              ))}
            </div>
          </div>
        );
      }
      return (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setMobileOpen(false)}
          style={{
            display: "block",
            padding: "12px 24px",
            fontSize: 13.5,
            color: "#555",
            textDecoration: "none",
            borderBottom: "1px solid #f0f0f0",
            fontFamily: "Georgia, serif",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fafaf8";
            e.currentTarget.style.color = gold;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#555";
          }}
        >
          {item.name}
        </Link>
      );
    });
  };

  return (
    <>
      <style>{`
        .mf-desktop-nav { display: flex; }
        .mf-mobile-menu { display: none; }
        @media (max-width: 900px) {
          .mf-desktop-nav { display: none !important; }
          .mf-mobile-menu { display: block; }
        }
        
        /* Smooth scroll for mobile menu */
        .mf-mobile-menu-scroll {
          max-height: calc(100vh - 72px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        /* Custom scrollbar */
        .mf-mobile-menu-scroll::-webkit-scrollbar {
          width: 4px;
        }
        
        .mf-mobile-menu-scroll::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        .mf-mobile-menu-scroll::-webkit-scrollbar-thumb {
          background: ${gold};
          border-radius: 4px;
        }
      `}</style>

      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 50,
          fontFamily: "Georgia, serif",
          boxShadow: mobileOpen ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <nav
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            height: 72,
            position: "relative",
          }}
        >
          {/* Logo */}
          <div style={{ flex: "0 0 auto" }}>
            <Link
              to="/"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              <img
                src={logo}
                alt="Mindframe India Logo"
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `1.5px solid ${gold}`,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Link>
          </div>

          {/* Desktop Center Nav */}
          <div
            className="mf-desktop-nav"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              alignItems: "center",
              gap: 28,
            }}
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.to}
                  style={{ position: "relative" }}
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnterServices}
                  onMouseLeave={handleMouseLeaveServices}
                >
                  <span
                    style={{
                      ...linkStyle(link.to),
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.borderBottomColor = gold)
                    }
                    onMouseOut={(e) => {
                      if (!isActive(link.to))
                        e.currentTarget.style.borderBottomColor = "transparent";
                    }}
                  >
                    {link.label}
                    <span
                      style={{
                        fontSize: 10,
                        color: servicesOpen ? gold : "#888",
                        transition: "transform 0.2s ease, color 0.2s ease",
                        transform: servicesOpen ? "rotate(180deg)" : "none",
                        display: "inline-block",
                      }}
                    >
                      ∨
                    </span>
                  </span>

                  {/* Desktop Dropdown Menu with Animation */}
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: 0,
                      background: "#fff",
                      border: "1px solid #eee",
                      borderRadius: "4px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      minWidth: 240,
                      zIndex: 100,
                      opacity: servicesOpen ? 1 : 0,
                      visibility: servicesOpen ? "visible" : "hidden",
                      transform: servicesOpen
                        ? "translateY(0)"
                        : "translateY(-10px)",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      pointerEvents: servicesOpen ? "auto" : "none",
                    }}
                  >
                    {renderDropdownItems()}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  style={linkStyle(link.to)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderBottomColor = gold;
                    e.currentTarget.style.color = gold;
                  }}
                  onMouseOut={(e) => {
                    if (!isActive(link.to)) {
                      e.currentTarget.style.borderBottomColor = "transparent";
                      e.currentTarget.style.color = "#1a1a1a";
                    }
                  }}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Right Icons */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                color: "#444",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 6,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                justifyContent: "center",
              }}
              aria-label="Menu"
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.8,
                  background: mobileOpen ? gold : "#333",
                  transition: "all 0.3s ease",
                  transform: mobileOpen
                    ? "rotate(45deg) translateY(6px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.8,
                  background: mobileOpen ? gold : "#333",
                  transition: "all 0.3s ease",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.8,
                  background: mobileOpen ? gold : "#333",
                  transition: "all 0.3s ease",
                  transform: mobileOpen
                    ? "rotate(-45deg) translateY(-6px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Search Bar with Animation */}
        <div
          style={{
            borderTop: "1px solid #eee",
            maxHeight: searchOpen ? 80 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "#fafaf8",
          }}
        >
          <div style={{ padding: "16px 24px" }}>
            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                border: "none",
                borderBottom: `2px solid ${gold}`,
                background: "transparent",
                fontFamily: "Georgia, serif",
                fontSize: 14,
                padding: "8px 0",
                outline: "none",
                color: "#1a1a1a",
              }}
            />
          </div>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div
          className="mf-mobile-menu"
          style={{
            maxHeight: mobileOpen ? "calc(100vh - 72px)" : 0,
            overflow: "hidden",
            transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            borderTop: mobileOpen ? "1px solid #eee" : "none",
            background: "#fff",
          }}
        >
          <div className="mf-mobile-menu-scroll">
            <div style={{ padding: "8px 0 24px" }}>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.to}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "14px 24px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "Georgia, serif",
                        fontSize: 14,
                        color: isActive(link.to) ? gold : "#1a1a1a",
                        fontWeight: isActive(link.to) ? 600 : 400,
                        borderBottom: "1px solid #f0f0f0",
                        textAlign: "left",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.label}
                      <span
                        style={{
                          fontSize: 11,
                          color: "#999",
                          transform: mobileServicesOpen
                            ? "rotate(180deg)"
                            : "none",
                          transition: "transform 0.25s ease",
                          display: "inline-block",
                        }}
                      >
                        ∨
                      </span>
                    </button>

                    {/* Mobile Services Sub-items */}
                    <div
                      style={{
                        maxHeight: mobileServicesOpen ? 500 : 0,
                        overflow: "hidden",
                        transition:
                          "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        background: "#fafaf8",
                      }}
                    >
                      {renderMobileDropdownItems()}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    style={{
                      display: "block",
                      padding: "14px 24px",
                      fontSize: 14,
                      textDecoration: "none",
                      color: isActive(link.to) ? gold : "#1a1a1a",
                      fontWeight: isActive(link.to) ? 600 : 400,
                      fontFamily: "Georgia, serif",
                      borderBottom: "1px solid #f0f0f0",
                      borderLeft: isActive(link.to)
                        ? `3px solid ${gold}`
                        : "3px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(link.to)) {
                        e.currentTarget.style.background = "#fafaf8";
                        e.currentTarget.style.color = gold;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.to)) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#1a1a1a";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              {/* Auth Section */}
              <div style={{ padding: "16px 24px 8px", borderTop: "1px solid #f0f0f0", marginTop: 8 }}>
                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    style={{
                      fontSize: 13,
                      color: "#c00",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "Georgia, serif",
                      padding: 0,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#a00")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#c00")}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/admin/login"
                    style={{
                      fontSize: 13,
                      color: gold,
                      fontFamily: "Georgia, serif",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#b8943a")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = gold)}
                  >
                    Admin Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}