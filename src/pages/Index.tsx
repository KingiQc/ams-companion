import { Users, DollarSign, TrendingUp, CalendarDays, Lightbulb, AlertTriangle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockClients, mockDeals, mockAppointments, mockInsights, pipelineStages } from "@/data/mockData";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { AppLayout } from "@/components/AppLayout";

const statCards = [
  { label: "Total Clients", value: "9", icon: Users, color: "hsl(228, 40%, 16%)", fgColor: "#fff" },
  { label: "Assets Under Management", value: "$5.1M", icon: DollarSign, color: "hsl(228, 40%, 16%)", fgColor: "#fff" },
  { label: "Pipeline Value", value: "$1.8M", icon: TrendingUp, color: "hsl(228, 40%, 16%)", fgColor: "#fff" },
  { label: "Appointments", value: "5", icon: CalendarDays, color: "hsl(var(--secondary))", fgColor: "hsl(0,0%,11%)" },
];

const Index = () => {
  const [deals, setDeals] = useState(mockDeals);
  const { toast } = useToast();

  const handleMoveStage = (dealId: string, newStage: string) => {
    setDeals((prev) =>
      prev.map((d) => (d.id === dealId ? { ...d, stage: newStage } : d))
    );
    const deal = deals.find((d) => d.id === dealId);
    const stage = pipelineStages.find((s) => s.id === newStage);
    toast({
      title: "Deal Updated",
      description: `${deal?.clientName} moved to "${stage?.name}"`,
    });
  };

  return (
    <AppLayout>
      {/* Page title */}
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-[15px]">Welcome back — here's your agency overview.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((stat) => (
          <Card key={stat.label} className="border-0 shadow-sm" style={{ background: stat.color, color: stat.fgColor }}>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                <stat.icon className="w-5 h-5" style={{ color: stat.fgColor }} />
              </div>
              <div>
                <p className="text-[13px] opacity-80">{stat.label}</p>
                <p className="text-[22px] font-bold leading-tight">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Insights */}
      <div className="mb-8">
        <h2 className="text-[17px] font-semibold text-foreground mb-4">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockInsights.map((insight) => (
            <Card key={insight.id} className="border shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${insight.type === "opportunity" ? "bg-success/10" : "bg-warning/10"}`}>
                    {insight.type === "opportunity" ? (
                      <Lightbulb className="w-4 h-4 text-success" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold text-foreground mb-1">{insight.title}</p>
                    <p className="text-[13.5px] text-muted-foreground leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sales Pipeline */}
      <div className="mb-8">
        <h2 className="text-[17px] font-semibold text-foreground mb-4">Sales Pipeline</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max pb-2">
            {pipelineStages.slice(0, 4).map((stage) => {
              const stageDeals = deals.filter((d) => d.stage === stage.id);
              return (
                <div key={stage.id} className="w-[280px] shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: stage.color }} />
                    <span className="text-[14px] font-semibold text-foreground">{stage.name}</span>
                    <Badge variant="secondary" className="ml-auto text-[12px]">{stageDeals.length}</Badge>
                  </div>
                  <div className="space-y-3">
                    {stageDeals.length === 0 && (
                      <div className="rounded-lg border border-dashed border-border p-4 text-center text-muted-foreground text-[13px]">
                        No deals
                      </div>
                    )}
                    {stageDeals.map((deal) => (
                      <Card key={deal.id} className="border shadow-sm">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[15px] font-semibold text-foreground">{deal.clientName}</p>
                              <p className="text-[13px] text-muted-foreground">{deal.policyType}</p>
                            </div>
                            <Badge
                              variant={deal.priority === "hot" ? "destructive" : deal.priority === "warm" ? "default" : "secondary"}
                              className="text-[11px] capitalize"
                            >
                              {deal.priority}
                            </Badge>
                          </div>
                          <p className="text-[16px] font-bold text-foreground">
                            ${deal.value.toLocaleString()}
                          </p>
                          <Select
                            value={deal.stage}
                            onValueChange={(v) => handleMoveStage(deal.id, v)}
                          >
                            <SelectTrigger className="h-8 text-[13px]">
                              <SelectValue placeholder="Move to stage" />
                            </SelectTrigger>
                            <SelectContent>
                              {pipelineStages.map((s) => (
                                <SelectItem key={s.id} value={s.id} className="text-[13px]">
                                  {s.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h2 className="text-[17px] font-semibold text-foreground mb-4">Upcoming Appointments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAppointments.slice(0, 3).map((appt) => (
            <Card key={appt.id} className="border shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarDays className="w-4 h-4 text-info" />
                  <span className="text-[13px] text-muted-foreground">{appt.date} · {appt.time}</span>
                </div>
                <p className="text-[15px] font-semibold text-foreground">{appt.clientName}</p>
                <p className="text-[13.5px] text-muted-foreground">{appt.type}</p>
                <p className="text-[12.5px] text-muted-foreground mt-2 italic">"{appt.notes}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
