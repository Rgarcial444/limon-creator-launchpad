import { ExternalLink } from "lucide-react";

const empresas = [
  {
    nombre: "Clinical Equipment Service",
    url: "https://clinicalequipmentservice.com",
    logo: "CES",
  },
  {
    nombre: "Tecnolan",
    url: "https://tecnolan.mx",
    logo: "TN",
  },
];

const EmpresasConfian = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {empresas.map((e) => (
            <a
              key={e.url}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary font-bold text-lg">
                {e.logo}
              </span>
              <div className="text-left">
                <span className="block font-semibold text-foreground group-hover:text-primary transition-colors">
                  {e.nombre}
                </span>
                <span className="text-xs text-muted-foreground">{e.url.replace("https://", "")}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpresasConfian;
