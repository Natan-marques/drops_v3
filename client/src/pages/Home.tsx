import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cloud, Code, Database, Download, Layers, Server, Terminal } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("backend");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation Rail */}
      <nav className="fixed left-0 top-0 h-full w-16 border-r border-border bg-card z-50 hidden md:flex flex-col items-center py-8 gap-8">
        <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-xl">
          TS
        </div>
        <div className="flex flex-col gap-6 mt-auto mb-auto">
          <button onClick={() => scrollToSection("hero")} className="p-2 hover:text-primary transition-colors" title="Home">
            <Terminal size={24} />
          </button>
          <button onClick={() => scrollToSection("backend")} className="p-2 hover:text-primary transition-colors" title="Back-End">
            <Server size={24} />
          </button>
          <button onClick={() => scrollToSection("database")} className="p-2 hover:text-primary transition-colors" title="Database">
            <Database size={24} />
          </button>
          <button onClick={() => scrollToSection("frontend")} className="p-2 hover:text-primary transition-colors" title="Front-End">
            <Layers size={24} />
          </button>
          <button onClick={() => scrollToSection("cloud")} className="p-2 hover:text-primary transition-colors" title="Cloud">
            <Cloud size={24} />
          </button>
        </div>
        <div className="mt-auto">
          <a href="/project_technologies_explained.pdf" download className="p-2 hover:text-primary transition-colors block" title="Download PDF">
            <Download size={24} />
          </a>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden border-b border-border bg-card p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-mono font-bold text-lg text-primary">TechStack_Guide</div>
        <a href="/project_technologies_explained.pdf" download>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> PDF
          </Button>
        </a>
      </header>

      <main className="flex-1 md:pl-16">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="/images/hero-background.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-primary text-primary font-mono text-sm bg-primary/10">
                DROPS_DE_CONHECIMENTO.V3
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter glitch-text" data-text="TECH STACK BLUEPRINT">
                TECH STACK <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">BLUEPRINT</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                A comprehensive technical deep dive into the architecture powering your application. 
                From Entity Framework to Blockchain Ledger.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={() => scrollToSection("backend")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                  INITIALIZE_TOUR <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a href="/project_technologies_explained.pdf" download>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                    DOWNLOAD_REPORT.PDF
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full opacity-30"></div>
              <div className="relative border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-sm text-muted-foreground">
                <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs">system_status.log</span>
                </div>
                <div className="space-y-2">
                  <p><span className="text-green-500">➜</span> <span className="text-blue-400">Loading</span> core modules...</p>
                  <p><span className="text-green-500">➜</span> <span className="text-purple-400">Entity Framework 6</span> initialized.</p>
                  <p><span className="text-green-500">➜</span> <span className="text-yellow-400">Hangfire</span> background jobs active.</p>
                  <p><span className="text-green-500">➜</span> <span className="text-cyan-400">SQL Ledger</span> integrity verified.</p>
                  <p><span className="text-green-500">➜</span> <span className="text-pink-400">Bulma CSS</span> styles loaded.</p>
                  <p><span className="text-green-500">➜</span> System ready.</p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back-End Section */}
        <section id="backend" className="py-24 border-b border-border bg-background/50">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary/10 border border-primary text-primary">
                <Server size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">BACK-END INFRASTRUCTURE</h2>
                <p className="text-muted-foreground font-mono">C# / .NET Framework</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Code className="h-5 w-5" /> Entity Framework 6
                    </CardTitle>
                    <CardDescription>Object-Relational Mapper (O/RM)</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Bridges the gap between object-oriented code and relational databases. 
                      Allows working with data using strongly-typed .NET objects (POCOs).
                    </p>
                    <ul className="space-y-2 text-sm font-mono">
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> Automatic Change Tracking</li>
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> LINQ Query Support</li>
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> Unit of Work Pattern</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center gap-2">
                      <Terminal className="h-5 w-5" /> Hangfire
                    </CardTitle>
                    <CardDescription>Background Job Processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Reliable background processing for .NET applications. Handles fire-and-forget, 
                      delayed, and recurring tasks without a separate Windows Service.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-secondary p-2 border border-border">Fire-and-Forget</div>
                      <div className="bg-secondary p-2 border border-border">Delayed Jobs</div>
                      <div className="bg-secondary p-2 border border-border">Recurring (CRON)</div>
                      <div className="bg-secondary p-2 border border-border">Continuations</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-2">
                      <Layers className="h-5 w-5" /> Zeus
                    </CardTitle>
                    <CardDescription>NFe Generation Library</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Specialized component for Brazilian electronic invoicing (Nota Fiscal Eletrônica). 
                      Handles XML generation, digital signing, and SEFAZ communication.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative sticky top-24">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-20"></div>
                <div className="relative bg-card border border-border p-2">
                  <img src="/images/backend-tech.png" alt="Backend Architecture" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-primary/50 p-4 font-mono text-xs">
                    <div className="flex justify-between mb-2">
                      <span className="text-primary">STATUS: ONLINE</span>
                      <span className="text-muted-foreground">LATENCY: 12ms</span>
                    </div>
                    <div className="h-1 w-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Database Section */}
        <section id="database" className="py-24 border-b border-border bg-card/30">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500 text-cyan-500">
                <Database size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">DATABASE LAYER</h2>
                <p className="text-muted-foreground font-mono">SQL Server / Blockchain</p>
              </div>
            </div>

            <Tabs defaultValue="ledger" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-secondary border border-border mb-8">
                <TabsTrigger value="ledger" className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono">LEDGER_BLOCKCHAIN</TabsTrigger>
                <TabsTrigger value="procedures" className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono">STORED_PROCEDURES</TabsTrigger>
                <TabsTrigger value="views" className="data-[state=active]:bg-primary data-[state=active]:text-black font-mono">SQL_VIEWS</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ledger" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-cyan-400">Tamper-Evident Data</h3>
                    <p className="text-muted-foreground">
                      SQL Server Ledger brings the power of blockchain to relational databases. 
                      It creates an immutable record of data modifications, protecting against 
                      tampering by high-privileged users.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 border border-border bg-secondary/50">
                        <div className="mt-1 text-cyan-500">01</div>
                        <div>
                          <h4 className="font-bold">Updatable Ledger Tables</h4>
                          <p className="text-sm text-muted-foreground">Allows updates/deletes but preserves full history.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 border border-border bg-secondary/50">
                        <div className="mt-1 text-cyan-500">02</div>
                        <div>
                          <h4 className="font-bold">Append-Only Ledger Tables</h4>
                          <p className="text-sm text-muted-foreground">Blocks updates/deletes entirely for maximum security.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-border p-2 bg-black">
                    <img src="/images/database-tech.png" alt="Blockchain Database" className="w-full h-auto" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="procedures">
                <Card className="bg-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle>Pre-compiled Execution</CardTitle>
                    <CardDescription>Encapsulated business logic for performance and security</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Security</h4>
                      <p className="text-sm text-muted-foreground">Prevents SQL injection and controls data access permissions.</p>
                    </div>
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Performance</h4>
                      <p className="text-sm text-muted-foreground">Reduced network traffic and pre-compiled execution plans.</p>
                    </div>
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Maintainability</h4>
                      <p className="text-sm text-muted-foreground">Centralized logic that can be updated without redeploying apps.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="views">
                <Card className="bg-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle>Virtual Tables</CardTitle>
                    <CardDescription>Simplified data access and abstraction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-500"></div>
                          <span>Simplify complex joins and calculations</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-500"></div>
                          <span>Restrict access to specific columns/rows</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-500"></div>
                          <span>Present data in specific formats for reporting</span>
                        </li>
                      </ul>
                      <div className="font-mono text-xs bg-black p-4 border border-border text-green-400">
                        <p>CREATE VIEW v_SalesSummary AS</p>
                        <p>SELECT</p>
                        <p className="pl-4">c.CustomerName,</p>
                        <p className="pl-4">SUM(o.TotalAmount) as TotalSales</p>
                        <p>FROM Customers c</p>
                        <p>JOIN Orders o ON c.Id = o.CustomerId</p>
                        <p>GROUP BY c.CustomerName;</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Front-End Section */}
        <section id="frontend" className="py-24 border-b border-border bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-500/10 border border-pink-500 text-pink-500">
                    <Layers size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">FRONT-END INTERFACE</h2>
                    <p className="text-muted-foreground font-mono">Bulma CSS Framework</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  A modern, mobile-first interface built with Bulma. Based on Flexbox, 
                  it provides a responsive grid system and modular components without 
                  JavaScript dependencies.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Modular</h4>
                    <p className="text-xs text-muted-foreground">Import only what you need</p>
                  </div>
                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Responsive</h4>
                    <p className="text-xs text-muted-foreground">Mobile-first Flexbox grid</p>
                  </div>
                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">No JS</h4>
                    <p className="text-xs text-muted-foreground">Pure CSS framework</p>
                  </div>
                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Modern</h4>
                    <p className="text-xs text-muted-foreground">Clean, readable syntax</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-pink-500/20 blur-xl rounded-full opacity-20"></div>
                <img src="/images/frontend-tech.png" alt="Frontend UI" className="relative z-10 w-full border border-border bg-card p-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Section */}
        <section id="cloud" className="py-24 bg-card/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-white/10 border border-white/20 text-white mb-6 rounded-full">
                <Cloud size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">CLOUD INFRASTRUCTURE</h2>
              <p className="text-muted-foreground">
                Hosted on a scalable environment powered by IIS and automated by Windows Task Scheduler.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="tech-card bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Server className="text-white" /> IIS Web Server
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Microsoft's flexible, general-purpose web server. Provides a secure, 
                    easy-to-manage platform for hosting web applications and services.
                  </p>
                  <div className="h-32 bg-black/50 border border-border p-4 font-mono text-xs text-green-400 overflow-hidden">
                    <p>Server: Microsoft-IIS/10.0</p>
                    <p>X-Powered-By: ASP.NET</p>
                    <p>Date: {new Date().toUTCString()}</p>
                    <p>Connection: keep-alive</p>
                    <p>Content-Length: 1452</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card bg-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Terminal className="text-white" /> Task Scheduler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automates routine tasks on the server. Triggers actions based on 
                    specific times, system events, or operational states.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 border border-border bg-secondary/30">
                      <span className="text-xs font-mono">Backup_DB.bat</span>
                      <span className="text-xs text-green-500">02:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-2 border border-border bg-secondary/30">
                      <span className="text-xs font-mono">Sync_Logs.ps1</span>
                      <span className="text-xs text-green-500">Every 1h</span>
                    </div>
                    <div className="flex items-center justify-between p-2 border border-border bg-secondary/30">
                      <span className="text-xs font-mono">Cleanup_Temp.exe</span>
                      <span className="text-xs text-green-500">Sunday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 flex justify-center">
               <img src="/images/cloud-tech.png" alt="Cloud Infrastructure" className="max-w-md w-full opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-card text-center">
          <div className="container">
            <div className="font-mono text-2xl font-bold text-primary mb-4">TECH STACK GUIDE</div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore data more intuitively, understand trends better, and easily save or share this report.
            </p>
            <div className="flex justify-center gap-4">
              <a href="/project_technologies_explained.pdf" download>
                <Button variant="outline" className="font-mono">
                  <Download className="mr-2 h-4 w-4" /> DOWNLOAD FULL REPORT
                </Button>
              </a>
            </div>
            <div className="mt-12 text-xs text-muted-foreground font-mono">
              GENERATED BY MANUS AI | SYSTEM_ID: 566b1aca
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
