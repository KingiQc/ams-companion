export interface Client {
  id: string;
  name: string;
  type: "individual" | "business";
  status: "active" | "inactive" | "lead";
  email: string;
  phone: string;
  policies: number;
  totalPremium: number;
  assignedAgent: string;
  createdAt: string;
}

export interface Policy {
  id: string;
  clientId: string;
  clientName: string;
  type: string;
  carrier: string;
  premium: number;
  status: "active" | "pending" | "expired" | "cancelled";
  startDate: string;
  renewalDate: string;
  policyNumber: string;
}

export interface Deal {
  id: string;
  clientName: string;
  policyType: string;
  value: number;
  stage: string;
  assignedAgent: string;
  createdAt: string;
  priority: "hot" | "warm" | "cold";
}

export interface Appointment {
  id: string;
  clientName: string;
  type: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  agent: string;
  notes: string;
}

export interface Insight {
  id: string;
  type: "opportunity" | "warning" | "info";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
}

export interface PipelineStage {
  id: string;
  name: string;
  color: string;
}
