export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Evelyn Tran. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: Feburary 8, 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
