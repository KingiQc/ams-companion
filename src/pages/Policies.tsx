import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockPolicies } from "@/data/mockData";
import { Search, FileText, CalendarDays } from "lucide-react";

const PoliciesPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = mockPolicies.filter((p) => {
    const matchSearch = p.clientName.toLowerCase().includes(search.toLowerCase()) || p.policyNumber.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.status === filter || p.type.toLowerCase() === filter;
    return matchSearch && matchFilter;
  });

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold text-foreground">Policies & Renewals</h1>
        <p className="text-muted-foreground text-[15px]">Track all client policies and upcoming renewals.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by client or policy number..." className="pl-10 bg-secondary border-0 text-[15px]" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px] text-[15px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Policies</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        {filtered.map((policy) => (
          <Card key={policy.id} className="border shadow-sm">
            <CardContent className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-foreground">{policy.clientName}</p>
                    <p className="text-[13px] text-muted-foreground">{policy.policyNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <Badge variant="outline" className="text-[12px]">{policy.type}</Badge>
                  <span className="text-[13px] text-muted-foreground">{policy.carrier}</span>
                  <span className="text-[15px] font-semibold text-foreground">${policy.premium.toLocaleString()}/yr</span>
                  <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
                    <CalendarDays className="w-3.5 h-3.5" />
                    Renews {policy.renewalDate}
                  </div>
                  <Badge variant={policy.status === "active" ? "default" : policy.status === "pending" ? "secondary" : "destructive"} className="text-[11px] capitalize">
                    {policy.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
};

export default PoliciesPage;
