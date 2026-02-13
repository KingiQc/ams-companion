import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockClients, mockDeals, mockPolicies } from "@/data/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ReportsPage = () => {
  const agentData = [
    { name: "John Smith", clients: mockClients.filter((c) => c.assignedAgent === "John Smith").length, deals: mockDeals.filter((d) => d.assignedAgent === "John Smith").length },
    { name: "Sarah Lee", clients: mockClients.filter((c) => c.assignedAgent === "Sarah Lee").length, deals: mockDeals.filter((d) => d.assignedAgent === "Sarah Lee").length },
    { name: "Mike Chen", clients: mockClients.filter((c) => c.assignedAgent === "Mike Chen").length, deals: mockDeals.filter((d) => d.assignedAgent === "Mike Chen").length },
  ];

  const policyTypes = mockPolicies.reduce<Record<string, number>>((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(policyTypes).map(([name, value]) => ({ name, value }));
  const COLORS = ["hsl(228,40%,16%)", "hsl(210,100%,52%)", "hsl(38,92%,50%)", "hsl(142,72%,42%)", "hsl(280,60%,50%)", "hsl(0,84%,60%)"];

  return (
    <AppLayout>
      <div className="mb-6">
        <h1 className="text-[22px] font-semibold text-foreground">Reports</h1>
        <p className="text-muted-foreground text-[15px]">Performance analytics and insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border shadow-sm">
          <CardHeader><CardTitle className="text-[16px]">Agent Performance</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={agentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" />
                <XAxis dataKey="name" tick={{ fontSize: 13 }} />
                <YAxis tick={{ fontSize: 13 }} />
                <Tooltip contentStyle={{ fontSize: 13 }} />
                <Bar dataKey="clients" fill="hsl(228,40%,16%)" name="Clients" radius={[4, 4, 0, 0]} />
                <Bar dataKey="deals" fill="hsl(210,100%,52%)" name="Deals" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border shadow-sm">
          <CardHeader><CardTitle className="text-[16px]">Policies by Type</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} (${value})`} labelLine={{ strokeWidth: 1 }}>
                  {pieData.map((_, i) => (<Cell key={i} fill={COLORS[i % COLORS.length]} />))}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 13 }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ReportsPage;
