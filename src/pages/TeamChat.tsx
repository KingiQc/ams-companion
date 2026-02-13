import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";

const TeamChatPage = () => (
  <AppLayout>
    <div className="mb-6">
      <h1 className="text-[22px] font-semibold text-foreground">Team Chat</h1>
      <p className="text-muted-foreground text-[15px]">Communicate with your team.</p>
    </div>
    <Card className="border shadow-sm">
      <CardContent className="p-12 text-center">
        <MessagesSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-[16px] font-semibold text-foreground mb-1">Team Chat Coming Soon</p>
        <p className="text-[14px] text-muted-foreground">Real-time team messaging will be available with backend integration.</p>
      </CardContent>
    </Card>
  </AppLayout>
);

export default TeamChatPage;
