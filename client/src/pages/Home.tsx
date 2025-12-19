import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Box, Cloud, Code, Database, ExternalLink, GraduationCap, Layers, Layout, Server, Terminal } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("backend");
  const [isEntityExampleOpen, setIsEntityExampleOpen] = useState(false);

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
          V3
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
          <button onClick={() => scrollToSection("courses")} className="p-2 hover:text-primary transition-colors" title="Cursos">
            <GraduationCap size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden border-b border-border bg-card p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-mono font-bold text-lg text-primary">SRP x SVV</div>
      </header>

      <main className="flex-1 md:pl-16">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-border">
          <div className="absolute inset-0 z-0 opacity-20">
            <img src="/assets/images/hero-background.png" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 border border-primary text-primary font-mono text-sm bg-primary/10">
                DROPS_DE_CONHECIMENTO.V3
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter glitch-text" data-text="SRP x SVV">
                SRP x SVV<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DROPS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                O drops V3 tem como intuito destacar as diferenças e semelhanças nas tecnologias utilizadas nos projetos SRP e SVV. Falando sobre algumas tecnologias de back-end, banco de dados, front-end e cloud.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={() => scrollToSection("backend")} className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono">
                  INITIALIZE_TOUR <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                  <p><span className="text-purple-400">➜</span> <span className="text-blue-400">Loading</span> core modules...</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-green-400">Entity Framework 6</span>: Persistência e mapeamento de dados legados.</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-yellow-400">Hangfire</span>: Agendamento e execução de tarefas em background.</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-red-400">MediatR</span>: Desacoplamento de lógica via Commands e Queries.</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-blue-400">NFe/NFSe</span>: Processamento e mensageria de documentos fiscais.</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-cyan-400">SQL Ledger</span>: Motor de regras financeiras e contábeis.</p>
                  <p><span className="text-purple-500">➜</span> <span className="text-pink-400">PrimeNG</span>: Biblioteca de componentes para interface Angular.</p>
                  <p><span className="text-purple-500">➜</span> System ready.</p>
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
                      Comunicação entre o banco de dados e o programa mais facilitada, sendo usado para fazer consultas, updates, deletes e atualizações no banco de dados diretamente no backend de forma mais simples.
                    </p>
                    <ul className="space-y-2 text-sm font-mono">
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> Rastreamento Automático de alterações</li>
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> LINQ Query</li>
                      <li className="flex items-center gap-2"><span className="text-primary">✓</span> Code First</li>
                    </ul>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 font-mono mt-2"
                      onClick={() => setIsEntityExampleOpen(true)}
                    >
                      OPEN_EXEMPLO
                    </Button>
                  </CardContent>
                </Card>

                {/* Modal de Exemplo Entity Framework */}
                <Dialog open={isEntityExampleOpen} onOpenChange={setIsEntityExampleOpen}>
                  <DialogContent className="sm:max-w-4xl max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-primary flex items-center gap-2">
                        <Code className="h-5 w-5" /> Exemplo Entity Framework 6 - Code First & Repository
                      </DialogTitle>
                      <DialogDescription>
                        Exemplo completo de uma entidade, sua configuração Fluent API, contexto e consulta em repositório.
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="max-h-[70vh] pr-4">
                      <div className="space-y-6">
                        {/* Classe Cliente */}
                        <div>
                          <h4 className="font-bold text-sm mb-2 text-green-400">📄 Cliente.cs - Entidade</h4>
                          <div className="bg-black/80 border border-border p-4 font-mono text-xs text-green-400 rounded-md overflow-x-auto">
                            <pre>{`using System;

namespace MeuProjeto.Domain.Entities
{
    public class Cliente
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Endereco { get; set; }
        public string Contato { get; set; }
        public DateTime DataCadastro { get; set; }
        public bool Ativo { get; set; }
    }
}`}</pre>
                          </div>
                        </div>

                        {/* Configuração Fluent API */}
                        <div>
                          <h4 className="font-bold text-sm mb-2 text-yellow-400">⚙️ ClienteConfiguration.cs - Fluent API</h4>
                          <div className="bg-black/80 border border-border p-4 font-mono text-xs text-yellow-400 rounded-md overflow-x-auto">
                            <pre>{`using System.Data.Entity.ModelConfiguration;
using MeuProjeto.Domain.Entities;

namespace MeuProjeto.Data.Configurations
{
    public class ClienteConfiguration : EntityTypeConfiguration<Cliente>
    {
        public ClienteConfiguration()
        {
            ToTable("Clientes");
            HasKey(c => c.Id);
            Property(c => c.Nome).IsRequired().HasMaxLength(150).HasColumnName("Nome");
            Property(c => c.Cpf).IsRequired().HasMaxLength(14).HasColumnName("Cpf");
            Property(c => c.DataCadastro).IsRequired().HasColumnName("DataCadastro");
            Property(c => c.Ativo).IsRequired().HasColumnName("Ativo");
        }
    }
}`}</pre>
                          </div>
                        </div>

                        {/* DbContext */}
                        <div>
                          <h4 className="font-bold text-sm mb-2 text-cyan-400">🗄️ MeuProjetoContext.cs - DbContext</h4>
                          <div className="bg-black/80 border border-border p-4 font-mono text-xs text-cyan-400 rounded-md overflow-x-auto">
                            <pre>{`using System.Data.Entity;
using MeuProjeto.Data.Configurations;
using MeuProjeto.Domain.Entities;

namespace MeuProjeto.Data
{
    public class MeuProjetoContext : DbContext
    {
        public MeuProjetoContext() : base("DefaultConnection") { }

        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ClienteConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}`}</pre>
                          </div>
                        </div>

                        {/* Repository Query Example */}
                        <div>
                          <h4 className="font-bold text-sm mb-2 text-pink-400">🔍 ClienteRepository.cs - Consulta LINQ</h4>
                          <div className="bg-black/80 border border-border p-4 font-mono text-xs text-pink-400 rounded-md overflow-x-auto">
                            <pre>{`using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using MeuProjeto.Domain.Entities;

namespace MeuProjeto.Data.Repositories
{
    public class ClienteRepository
    {
        private readonly MeuProjetoContext _context;

        public ClienteRepository(MeuProjetoContext context)
        {
            _context = context;
        }

        public List<Cliente> GetClientesAtivosPorNome(string nome)
        {
            // Exemplo de consulta LINQ utilizando o Entity Framework 6
            return _context.Query<Clientes>()
                .Where(c => c.Ativo && c.Nome.Contains(nome))
                .OrderBy(c => c.Nome)
                .ToList();
        }
    }
}`}</pre>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center gap-2">
                      <Terminal className="h-5 w-5" /> Hangfire
                    </CardTitle>
                    <CardDescription>Background Job Processing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      O Hangfire é uma biblioteca .NET para gerenciamento de tarefas em segundo plano, permitindo agendar e automatizar processos sem travar a aplicação. Ele possui um painel de monitoramento essencial para acompanhar o status das operações e identificar rapidamente falhas ou travamentos de tarefas.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-secondary p-2 border border-border">Tarefas agendadas</div>
                      <div className="bg-secondary p-2 border border-border">Tarefas adiadas</div>
                      <div className="bg-secondary p-2 border border-border">Tarefas recorrentes (CRON)</div>
                      <div className="bg-secondary p-2 border border-border">Continuações</div>
                    </div>
                    <div className="flex flex-wrap gap-6 pt-2">
                      <a href="https://scapi.sistemacbm.com/hangfire" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                          OPEN_SRP_HANGFIRE
                        </Button>
                      </a>
                      <a href="https://api.sistemavistoria.com.br/svv/hangfire" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                          OPEN_SVV_HANGFIRE
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-red-400 flex items-center gap-2">
                      <Terminal className="h-5 w-5" /> MediatR
                    </CardTitle>
                    <CardDescription>Mediator Pattern</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      MediatR é uma biblioteca .NET para implementação do padrão Mediator, que ajuda a centralizar a lógica de negócios e comunicação entre componentes de uma aplicação. Ele facilita a separação de responsabilidades e promove uma arquitetura mais limpa e testável.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-secondary p-2 border border-border">Command / Query</div>
                      <div className="bg-secondary p-2 border border-border">Handlers</div>
                      <div className="bg-secondary p-2 border border-border">Pipeline Behaviors</div>
                      <div className="bg-secondary p-2 border border-border">Publish / Notification</div>
                    </div>

                    <a href="/assets/files/MediatR.zip" download>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                        Download_MediatR_Preview.cs
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-2">
                      <Layers className="h-5 w-5" /> Zeus
                    </CardTitle>
                    <CardDescription>Biblioteca de Geração de Nota Fiscal Eletrônica</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Componente especializado para a Nota Fiscal Eletrônica brasileira. Responsável pela geração de XML, assinatura digital e comunicação com a SEFAZ.
                    </p>
                  </CardContent>
                </Card>

                <Card className="tech-card group">
                  <CardHeader>
                    <CardTitle className="text-blue-400 flex items-center gap-2">
                      <Layers className="h-5 w-5" /> Tecnospeed
                    </CardTitle>
                    <CardDescription>Solução para a geração de Nota Fiscal de Serviço Eletrônica</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Sistema especializado para a geração de Nota Fiscal de Serviço Eletrônica (NFSe) brasileira. Responsável pela geração de XML, assinatura digital e comunicação com a Prefeitura ou Emissor Nacional.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative sticky top-24">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-20"></div>
                <div className="relative bg-card border border-border p-2">
                  <img src="/assets/images/backend-tech.png" alt="Backend Architecture" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
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

        {/* Database Section SRP*/}
        <section id="database" className="py-24 border-b border-border bg-card/30">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500 text-cyan-500">
                <Database size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Banco de Dados</h2>
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
                    <h3 className="text-2xl font-bold text-cyan-400">Dados à prova de adulteração</h3>
                    <p className="text-muted-foreground">
                      O Ledger com Blockchain é usado para garantir a integridade de suas transações dados sensíveis. Ele fornece um registro de auditoria verificável de todas as alterações feitas no banco de dados, que pode ser usado para detectar e prevenir fraudes, bem como para cumprir os requisitos regulatórios.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 border border-border bg-secondary/50">
                        <div className="mt-1 text-cyan-500">01</div>
                        <div>
                          <h4 className="font-bold">Updatable Ledger Tables</h4>
                          <p className="text-sm text-muted-foreground">Permite atualizar e excluir linhas, preservando um histórico completo de todas as alterações.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 border border-border bg-secondary/50">
                        <div className="mt-1 text-cyan-500">02</div>
                        <div>
                          <h4 className="font-bold">Append-Only Ledger Tables</h4>
                          <p className="text-sm text-muted-foreground">Permitir apenas a inserção de novas linhas, proporcionando um nível ainda maior de proteção contra adulteração.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-border p-2 bg-black">
                    <img src="assets/images/database-tech.png" alt="Blockchain Database" className="w-full h-auto" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="procedures">
                <Card className="bg-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle>Procedimentos Armazenados</CardTitle>
                    <CardDescription>Encapsulamento de lógica de negócios para melhor desempenho e segurança</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Segurança</h4>
                      <p className="text-sm text-muted-foreground">Previne SQL injection e controles de permissão de acesso a dados.</p>
                    </div>
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Performance</h4>
                      <p className="text-sm text-muted-foreground">Redução de tráfego de rede e planos de execução pré-compilados.</p>
                    </div>
                    <div className="p-4 border border-border bg-card hover:border-primary transition-colors">
                      <h4 className="font-bold mb-2 text-primary">Manutenibilidade</h4>
                      <p className="text-sm text-muted-foreground">Centralizada que pode ser atualizada sem reimplantar apps.</p>
                    </div>

                    <a href="/assets/files/CriarDetranAcesso_SP.sql" download>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                        Download_Procedure.sql
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="views">
                <Card className="bg-secondary/20 border-border">
                  <CardHeader>
                    <CardTitle>Tabelas Virtuais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <CardDescription className="text-base">
                          As view são tabelas virtuais baseadas no conjunto de resultados de uma consulta SQL.
                          Elas fornecem uma maneira de simplificar consultas complexas, restringir o acesso aos dados
                          e apresentar os dados em um formato mais amigável ao usuário.
                        </CardDescription>
                        <ul className="space-y-4">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500"></div>
                            <span>Abstração de complexidade de joins e cálculos</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500"></div>
                            <span>Restrição de acesso a colunas/linhas específicas</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-cyan-500"></div>
                            <span>Presentação de dados em formatos específicos para relatórios</span>
                          </li>
                        </ul>
                      </div>
                      <div className="font-mono text-xs bg-black p-4 border border-border text-green-400 overflow-x-auto">
                        <p>SELECT</p>
                        <p className="pl-4">TOP 1000</p>
                        <p className="pl-4">EM.CpfCnpj AS CpfCnpjAlteracao,</p>
                        <p className="pl-4">COALESCE(NULLIF(EM.NomeFantasia, ''), NULLIF(EM.RazaoSocial, ''), EM.Nome) AS NomeAlteracao,</p>
                        <p className="pl-4">U.Nome AS Usuario,</p>
                        <p className="pl-4">U.CpfCnpj AS CpfUsuario,</p>
                        <p className="pl-4">LG.Tipo AS TipoOperacao,</p>
                        <p className="pl-4">LG.Identificador,</p>
                        <p className="pl-4">LG.ValorNovo,</p>
                        <p className="pl-4">LG.UltimaAtualizacao AS Data</p>
                        <p>FROM LogGeral LG</p>
                        <p className="pl-4">INNER JOIN Pessoa EM</p>
                        <p className="pl-8">ON LG.Empresa_Id = EM.Id</p>
                        <p className="pl-4">INNER JOIN Pessoa U</p>
                        <p className="pl-8">ON LG.Usuario_Id = U.Usuario_Id</p>
                        <p>ORDER BY LG.UltimaAtualizacao DESC</p>
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
                    <h2 className="text-3xl font-bold">FRONT-END</h2>
                    <p className="text-muted-foreground font-mono">PrimeNG Framework</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  PrimeNG é uma biblioteca de componentes UI para Angular focada em
                  produtividade. Ele fornece uma grande variedade de componentes prontos,
                  como DataTable, Dialog, Calendar e Dropdown, todos pensados para uso
                  em aplicações reais e corporativas.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Componentes Prontos</h4>
                    <p className="text-xs text-muted-foreground">
                      Tabelas, formulários, dialogs, menus e gráficos
                    </p>
                  </div>

                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Angular Nativo</h4>
                    <p className="text-xs text-muted-foreground">
                      Integração direta com Angular e Reactive Forms
                    </p>
                  </div>

                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Temas & Layout</h4>
                    <p className="text-xs text-muted-foreground">
                      Sistema de temas, PrimeFlex e dark mode
                    </p>
                  </div>

                  <div className="p-4 border border-border bg-card hover:bg-pink-500/5 transition-colors">
                    <h4 className="font-bold text-pink-400 mb-1">Produtividade</h4>
                    <p className="text-xs text-muted-foreground">
                      Menos código manual e mais velocidade no desenvolvimento
                    </p>
                  </div>
                  <a href="https://primeng.org" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-mono">
                      OPEN_PRIMENG
                    </Button>
                  </a>
                </div>
              </div>

              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 bg-pink-500/20 blur-xl rounded-full opacity-20"></div>
                <img src="/assets/images/frontend-tech.png" alt="Frontend UI" className="relative z-10 w-full border border-border bg-card p-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Section */}
        <section id="cloud" className="py-24 bg-card/30 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-blue-500/10 border border-blue-500 text-blue-500">
                <Cloud size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">CLOUD INFRASTRUCTURE</h2>
                <p className="text-muted-foreground font-mono">IIS / Docker / Task Scheduler</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card className="tech-card bg-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-400">
                      <Server className="h-5 w-5" /> IIS Web Server
                    </CardTitle>
                    <CardDescription>Servidor Web da Microsoft flexível e seguro</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Plataforma fácil de gerenciar para hospedar aplicativos e serviços da Web. Oferece recursos avançados de segurança e isolamento de aplicações.
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
                    <CardTitle className="flex items-center gap-3 text-blue-500">
                      <Box className="h-5 w-5" /> Docker
                    </CardTitle>
                    <CardDescription>Containerização de Aplicações</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Plataforma para desenvolver, enviar e executar aplicações em containers. Garante que o software funcione sempre da mesma forma, independentemente do ambiente.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-secondary p-2 border border-border">Isolamento</div>
                      <div className="bg-secondary p-2 border border-border">Portabilidade</div>
                      <div className="bg-secondary p-2 border border-border">Escalabilidade</div>
                      <div className="bg-secondary p-2 border border-border">Eficiência</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tech-card bg-transparent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-yellow-500">
                      <Terminal className="h-5 w-5" /> Task Scheduler
                    </CardTitle>
                    <CardDescription>Automação de Tarefas do Windows</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Automatiza tarefas rotineiras no servidor. Aciona ações baseadas em horários específicos, eventos do sistema ou estados operacionais.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border border-border bg-secondary/30">
                        <span className="text-xs font-mono">Backup_DB.bat</span>
                        <span className="text-xs text-green-500">02:00 AM</span>
                      </div>
                      <div className="flex items-center justify-between p-2 border border-border bg-secondary/30">
                        <span className="text-xs font-mono">Sync_Logs.ps1</span>
                        <span className="text-xs text-green-500">One Time</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative sticky top-24">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20"></div>
                <div className="relative bg-card border border-border p-2">
                  <img src="/assets/images/cloud-tech.png" alt="Cloud Infrastructure" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-blue-500/50 p-4 font-mono text-xs">
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-400">SERVER STATUS</span>
                      <span className="text-green-500">HEALTHY</span>
                    </div>
                    <div className="h-1 w-full bg-secondary overflow-hidden">
                      <div className="h-full bg-blue-500 w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-24 bg-background border-b border-border">
          <div className="container">
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-purple-500/10 border border-purple-500 text-purple-500">
                <GraduationCap size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">CURSOS RECOMENDADOS</h2>
                <p className="text-muted-foreground font-mono">Aprofunde seus conhecimentos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="tech-card group hover:border-purple-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center gap-2 text-lg">
                    <Code className="h-4 w-4" /> .NET Web API e Angular
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Domine C#, Entity Framework Core, Angular e a arquitetura de APIs RESTful com .NET moderno.
                  </p>
                  <a href="https://www.udemy.com/course/angular-dotnetcore-efcore/?couponCode=25BBPMXINACTIVE" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-mono text-xs">
                      VER CURSO <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="tech-card group hover:border-cyan-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-cyan-400 flex items-center gap-2 text-lg">
                    <Database className="h-4 w-4" /> Banco de Dados
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Do básico ao avançado: Stored Procedures, Views, Otimização e Segurança de dados.
                  </p>
                  <a href="https://www.udemy.com/course/curso-sql-do-zero-ao-avancado/" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono text-xs">
                      VER CURSO <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="tech-card group hover:border-red-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-red-400 flex items-center gap-2 text-lg">
                    <Layout className="h-4 w-4" /> Angular +
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Requisições HTTP, Services, Interceptors, Rotas, Forms, Observables, Promises, Etc.
                  </p>
                  <a href="https://www.udemy.com/course/super-treinamento-de-angular-16-do-basico-ao-avancado" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 font-mono text-xs">
                      VER CURSO <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="tech-card group hover:border-blue-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-2 text-lg">
                    <Cloud className="h-4 w-4" /> Azure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Azure VM, Network, Resource Manager, Monitor, App Service, Backup, Application Insights, Etc.
                  </p>
                  <a href="https://www.udemy.com/course/azureinfraestrutura" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-mono text-xs">
                      VER CURSO <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-card text-center">
          <div className="container">
            <div className="font-mono text-2xl font-bold text-primary mb-4">SRP X SVV</div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Apresentação referente ao Drops de Conhecimento V3.
            </p>
            <div className="mt-12 text-xs text-muted-foreground font-mono">
              CREATED BY TAÍSSA E NATAN
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
