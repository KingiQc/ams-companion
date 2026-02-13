import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

const products = [
  { name: "Term Life 20", carrier: "MetLife", type: "Life", status: "available" },
  { name: "Whole Life Plus", carrier: "Prudential", type: "Life", status: "available" },
  { name: "Auto Comprehensive", carrier: "State Farm", type: "Auto", status: "available" },
  { name: "Business Owner Policy", carrier: "Hartford", type: "Business", status: "available" },
  { name: "Workers Comp Standard", carrier: "Travelers", type: "Workers Comp", status: "available" },
  { name: "Health PPO Gold", carrier: "Aetna", type: "Health", status: "available" },
  { name: "Cyber Liability", carrier: "Chubb", type: "Business", status: "available" },
  { name: "Fleet Coverage", carrier: "Liberty Mutual", type: "Auto", status: "available" },
];

const ProductsPage = () => (
  <AppLayout>
    <div className="mb-6">
      <h1 className="text-[22px] font-semibold text-foreground">Products</h1>
      <p className="text-muted-foreground text-[15px]">Available insurance products from carriers.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.name} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Package className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-foreground">{product.name}</p>
                <p className="text-[13px] text-muted-foreground">{product.carrier}</p>
                <Badge variant="outline" className="mt-2 text-[11px]">{product.type}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </AppLayout>
);

export default ProductsPage;
