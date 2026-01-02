export const RoutePaths = {
  /* ================= AUTH ROUTES ================= */
  Landing: "/",                 // Public landing page
  Login: "/login",              // Login page
  Register: "/signup",          // Register / Signup page
  ForgotPassword: "/forgotpassword",     // OTP verification page

  /* ================= WEBSITE (PUBLIC) ROUTES ================= */
  Features: "/features",        
  Pricing: "/pricing",          // Pricing plans
  About: "/about",              // About company
  Termspage: "/terms",          // Terms & Conditions
  Privacy: "/privacy",          // Privacy Policy

  /* ================= DASHBOARD (PROTECTED) ROUTES ================= */
  Dashboard: "/dashboard",                  // Dashboard home
  Invoices: "/dashboard/invoices",          // Invoice list
  CreateInvoice: "/dashboard/invoices/new", // Create invoice
  Sales: "/dashboard/sales",                // Sales / Billing
  Customers: "/dashboard/customers",        // Customer management
  Inventory: "/dashboard/inventory",        // Inventory / Products
  Reports: "/dashboard/reports",            // Analytics & reports
  Settings: "/dashboard/settings",          // App / Profile settings
};