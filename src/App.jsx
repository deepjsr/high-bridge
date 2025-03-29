import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";

// Import pages/components
import Login from "./pages/LoginPage";
import Signup from "./components/Auth/Signup";
import WorkflowList from "./components/Workflow/WorkflowList";
import WorkflowTable from "./components/Workflow/WorkflowTable";
import CreateProcessPage from "./components/Workflow/CreateProcessPage";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = React.useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={isLoginPage ? "bg-login" : "bg-light"}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route
          path="/workflows"
          element={
            <WorkflowList />
            // <ProtectedRoute>
            // </ProtectedRoute>
          }
        />
        <Route
          path="/create-workflow"
          element={
            // <ProtectedRoute>
            // </ProtectedRoute>
            <CreateProcessPage />
          }
        />
        <Route path="/" element={<WorkflowTable />} />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <div className="container text-center mt-5">
              <h2 className="display-4">404 - Page Not Found</h2>
              <p className="lead">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
