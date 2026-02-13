import { Deal, Client, Policy, Appointment, Insight, PipelineStage } from "@/types/ams";

export const mockClients: Client[] = [
  { id: "1", name: "Robert Wilson", type: "individual", status: "active", email: "robert@email.com", phone: "(555) 123-4567", policies: 3, totalPremium: 12500, assignedAgent: "John Smith", createdAt: "2024-08-12" },
  { id: "2", name: "Wilson Industries", type: "business", status: "active", email: "info@wilson.com", phone: "(555) 234-5678", policies: 5, totalPremium: 85000, assignedAgent: "Sarah Lee", createdAt: "2024-06-20" },
  { id: "3", name: "Maria Garcia", type: "individual", status: "active", email: "maria@email.com", phone: "(555) 345-6789", policies: 2, totalPremium: 8200, assignedAgent: "John Smith", createdAt: "2024-09-01" },
  { id: "4", name: "TechStart LLC", type: "business", status: "active", email: "hello@techstart.com", phone: "(555) 456-7890", policies: 4, totalPremium: 45000, assignedAgent: "Mike Chen", createdAt: "2024-07-15" },
  { id: "5", name: "James Brown", type: "individual", status: "inactive", email: "james@email.com", phone: "(555) 567-8901", policies: 1, totalPremium: 3200, assignedAgent: "Sarah Lee", createdAt: "2024-03-10" },
  { id: "6", name: "Emily Davis", type: "individual", status: "active", email: "emily@email.com", phone: "(555) 678-9012", policies: 2, totalPremium: 15600, assignedAgent: "John Smith", createdAt: "2024-10-05" },
  { id: "7", name: "Global Freight Co", type: "business", status: "active", email: "ops@globalfreight.com", phone: "(555) 789-0123", policies: 6, totalPremium: 120000, assignedAgent: "Mike Chen", createdAt: "2024-05-22" },
  { id: "8", name: "Sarah Johnson", type: "individual", status: "lead", email: "sarah.j@email.com", phone: "(555) 890-1234", policies: 0, totalPremium: 0, assignedAgent: "Sarah Lee", createdAt: "2025-01-10" },
  { id: "9", name: "David Kim", type: "individual", status: "active", email: "david.kim@email.com", phone: "(555) 901-2345", policies: 3, totalPremium: 22000, assignedAgent: "John Smith", createdAt: "2024-11-18" },
];

export const mockPolicies: Policy[] = [
  { id: "p1", clientId: "1", clientName: "Robert Wilson", type: "Life", carrier: "MetLife", premium: 5200, status: "active", startDate: "2024-01-15", renewalDate: "2025-01-15", policyNumber: "LF-20240115-001" },
  { id: "p2", clientId: "1", clientName: "Robert Wilson", type: "Auto", carrier: "State Farm", premium: 3800, status: "active", startDate: "2024-03-20", renewalDate: "2025-03-20", policyNumber: "AU-20240320-002" },
  { id: "p3", clientId: "1", clientName: "Robert Wilson", type: "Health", carrier: "Aetna", premium: 3500, status: "pending", startDate: "2025-02-01", renewalDate: "2026-02-01", policyNumber: "HE-20250201-003" },
  { id: "p4", clientId: "2", clientName: "Wilson Industries", type: "Business", carrier: "Hartford", premium: 45000, status: "active", startDate: "2024-06-01", renewalDate: "2025-06-01", policyNumber: "BU-20240601-004" },
  { id: "p5", clientId: "2", clientName: "Wilson Industries", type: "Workers Comp", carrier: "Travelers", premium: 22000, status: "active", startDate: "2024-06-01", renewalDate: "2025-06-01", policyNumber: "WC-20240601-005" },
  { id: "p6", clientId: "3", clientName: "Maria Garcia", type: "Life", carrier: "Prudential", premium: 4200, status: "active", startDate: "2024-09-15", renewalDate: "2025-09-15", policyNumber: "LF-20240915-006" },
  { id: "p7", clientId: "4", clientName: "TechStart LLC", type: "Business", carrier: "Chubb", premium: 28000, status: "active", startDate: "2024-07-20", renewalDate: "2025-07-20", policyNumber: "BU-20240720-007" },
  { id: "p8", clientId: "6", clientName: "Emily Davis", type: "Health", carrier: "Blue Cross", premium: 8400, status: "active", startDate: "2024-10-10", renewalDate: "2025-10-10", policyNumber: "HE-20241010-008" },
  { id: "p9", clientId: "7", clientName: "Global Freight Co", type: "Business", carrier: "Liberty Mutual", premium: 65000, status: "active", startDate: "2024-05-01", renewalDate: "2025-05-01", policyNumber: "BU-20240501-009" },
  { id: "p10", clientId: "9", clientName: "David Kim", type: "Auto", carrier: "GEICO", premium: 2800, status: "active", startDate: "2024-11-20", renewalDate: "2025-11-20", policyNumber: "AU-20241120-010" },
];

export const mockDeals: Deal[] = [
  { id: "d1", clientName: "Sarah Johnson", policyType: "Life Insurance", value: 15000, stage: "lead", assignedAgent: "Sarah Lee", createdAt: "2025-01-10", priority: "hot" },
  { id: "d2", clientName: "Robert Wilson", policyType: "Health Upgrade", value: 8500, stage: "appointment", assignedAgent: "John Smith", createdAt: "2025-01-05", priority: "warm" },
  { id: "d3", clientName: "TechStart LLC", policyType: "Cyber Insurance", value: 35000, stage: "consultation", assignedAgent: "Mike Chen", createdAt: "2024-12-18", priority: "hot" },
  { id: "d4", clientName: "Maria Garcia", policyType: "Auto Insurance", value: 4200, stage: "lead", assignedAgent: "John Smith", createdAt: "2025-01-12", priority: "cold" },
  { id: "d5", clientName: "Global Freight Co", policyType: "Fleet Insurance", value: 92000, stage: "proposal", assignedAgent: "Mike Chen", createdAt: "2024-11-28", priority: "hot" },
  { id: "d6", clientName: "Emily Davis", policyType: "Life Insurance", value: 12000, stage: "appointment", assignedAgent: "John Smith", createdAt: "2025-01-08", priority: "warm" },
  { id: "d7", clientName: "David Kim", policyType: "Business Insurance", value: 28000, stage: "consultation", assignedAgent: "Sarah Lee", createdAt: "2024-12-22", priority: "warm" },
  { id: "d8", clientName: "Wilson Industries", policyType: "D&O Insurance", value: 55000, stage: "proposal", assignedAgent: "Sarah Lee", createdAt: "2024-12-01", priority: "hot" },
];

export const mockAppointments: Appointment[] = [
  { id: "a1", clientName: "Robert Wilson", type: "Policy Review", date: "2025-02-14", time: "10:00 AM", status: "upcoming", agent: "John Smith", notes: "Annual policy review meeting" },
  { id: "a2", clientName: "TechStart LLC", type: "Consultation", date: "2025-02-14", time: "2:00 PM", status: "upcoming", agent: "Mike Chen", notes: "Cyber insurance consultation" },
  { id: "a3", clientName: "Sarah Johnson", type: "Initial Meeting", date: "2025-02-15", time: "11:00 AM", status: "upcoming", agent: "Sarah Lee", notes: "New prospect introduction" },
  { id: "a4", clientName: "Global Freight Co", type: "Proposal Presentation", date: "2025-02-16", time: "9:30 AM", status: "upcoming", agent: "Mike Chen", notes: "Fleet insurance proposal" },
  { id: "a5", clientName: "Emily Davis", type: "Follow-up", date: "2025-02-17", time: "3:00 PM", status: "upcoming", agent: "John Smith", notes: "Life insurance follow-up" },
];

export const mockInsights: Insight[] = [
  { id: "i1", type: "opportunity", title: "Convert Top Prospect", description: "Robert Wilson shows high engagement — schedule a follow-up to close the Health Upgrade deal worth $8,500.", priority: "high" },
  { id: "i2", type: "warning", title: "Follow Up on Stalled Deals", description: "3 deals have been in the same stage for over 14 days. Review and take action.", priority: "medium" },
  { id: "i3", type: "opportunity", title: "Prioritize High-Value Leads", description: "Global Freight Co fleet insurance deal ($92K) is in proposal stage. Schedule a meeting to close.", priority: "high" },
];

export const pipelineStages: PipelineStage[] = [
  { id: "lead", name: "Lead", color: "hsl(220, 10%, 46%)" },
  { id: "appointment", name: "Appointment Scheduled", color: "hsl(210, 100%, 52%)" },
  { id: "consultation", name: "Consultation Completed", color: "hsl(38, 92%, 50%)" },
  { id: "proposal", name: "Proposal Sent", color: "hsl(280, 60%, 50%)" },
  { id: "closed-won", name: "Closed Won", color: "hsl(142, 72%, 42%)" },
  { id: "closed-lost", name: "Closed Lost", color: "hsl(0, 84%, 60%)" },
];
