import { Deal, Client, Policy, Appointment, Insight, PipelineStage } from "@/types/ams";

export const mockClients: Client[] = [];

export const mockPolicies: Policy[] = [];

export const mockDeals: Deal[] = [];

export const mockAppointments: Appointment[] = [];

export const mockInsights: Insight[] = [];

export const pipelineStages: PipelineStage[] = [
  { id: "lead", name: "Lead", color: "hsl(220, 10%, 46%)" },
  { id: "appointment", name: "Appointment Scheduled", color: "hsl(210, 100%, 52%)" },
  { id: "consultation", name: "Consultation Completed", color: "hsl(38, 92%, 50%)" },
  { id: "proposal", name: "Proposal Sent", color: "hsl(280, 60%, 50%)" },
  { id: "closed-won", name: "Closed Won", color: "hsl(142, 72%, 42%)" },
  { id: "closed-lost", name: "Closed Lost", color: "hsl(0, 84%, 60%)" },
];
