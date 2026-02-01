import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  LogOut, 
  TrendingUp, 
  Heart, 
  Shield, 
  Brain,
  Wallet,
  Plus,
  Bell,
  Settings,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  // Get display name from user metadata or email
  const displayName = user?.user_metadata?.display_name || user?.email?.split("@")[0] || "User";

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LifeOS</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:inline text-foreground">{displayName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {displayName}!
          </h1>
          <p className="text-muted-foreground">
            Here's your financial health overview for today.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Net Worth</span>
            </div>
            <div className="text-2xl font-bold text-foreground">$0.00</div>
            <p className="text-xs text-muted-foreground mt-1">Connect accounts to see</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Investments</span>
            </div>
            <div className="text-2xl font-bold text-foreground">$0.00</div>
            <p className="text-xs text-muted-foreground mt-1">No accounts connected</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Health Score</span>
            </div>
            <div className="text-2xl font-bold text-foreground">--</div>
            <p className="text-xs text-muted-foreground mt-1">Connect health apps</p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Insurance</span>
            </div>
            <div className="text-2xl font-bold text-foreground">0</div>
            <p className="text-xs text-muted-foreground mt-1">No policies tracked</p>
          </div>
        </div>

        {/* Get started cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-left hover:border-primary/50 hover:bg-card transition-all group">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Connect Bank Accounts</h3>
              <p className="text-sm text-muted-foreground">
                Link your bank and investment accounts to track your net worth.
              </p>
            </button>

            <button className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-left hover:border-accent/50 hover:bg-card transition-all group">
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Sync Health Data</h3>
              <p className="text-sm text-muted-foreground">
                Connect Apple Health, Fitbit, or other wearables.
              </p>
            </button>

            <button className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-left hover:border-primary/50 hover:bg-card transition-all group">
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Upload Insurance</h3>
              <p className="text-sm text-muted-foreground">
                Add your insurance policies for gap analysis.
              </p>
            </button>
          </div>
        </div>

        {/* AI Insights placeholder */}
        <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">AI Insights</h3>
              <p className="text-muted-foreground">
                Connect your accounts to start receiving personalized AI-powered insights 
                about your health, wealth, and insurance coverage.
              </p>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <Plus className="h-4 w-4 mr-2" />
              Connect Data
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
