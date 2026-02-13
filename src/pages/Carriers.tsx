import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const carriers = [
  { name: "MetLife", products: 12, status: "active" },
  { name: "State Farm", products: 18, status: "active" },
  { name: "Aetna", products: 8, status: "active" },
  { name: "Hartford", products: 15, status: "active" },
  { name: "Travelers", products: 10, status: "active" },
  { name: "Prudential", products: 14, status: "active" },
];

const CarriersPage = () => (
  <AppLayout>
    <div className="mb-6">
      <h1 className="text-[22px] font-semibold text-foreground">Carrier Access</h1>
      <p className="text-muted-foreground text-[15px]">Manage your carrier partnerships.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {carriers.map((carrier) => (
        <Card key={carrier.name} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-foreground">{carrier.name}</p>
              <p className="text-[13px] text-muted-foreground">{carrier.products} products available</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </AppLayout>
);

export default CarriersPage;
