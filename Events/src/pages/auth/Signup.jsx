import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaUserPlus } from "react-icons/fa";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import { useFormState } from "../../hooks/useFormState";
import { authService } from "../../services/api/authService";

const Signup = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { form, handleInputChange } = useFormState({
    firstName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authService.register(form);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Signup failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h2>
          <p className="text-gray-600 dark:text-gray-400">Join EventPro and start planning amazing events</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600 text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              name="firstName"
              label="Full Name"
              placeholder="Enter your full name"
              value={form.firstName}
              onChange={handleInputChange}
              required
            />
            <InputField
              name="email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleInputChange}
              required
            />
            <InputField
              name="password"
              type="password"
              label="Password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleInputChange}
              minLength={6}
              required
            />
            <p className="-mt-4 text-xs text-gray-500 dark:text-gray-400">Minimum 6 characters</p>
            <Button
              type="submit"
              disabled={loading}
              icon={loading ? null : FaUserPlus}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500"
            >
              {loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
