import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const MessagesPage = () => (
  <AppLayout>
    <div className="mb-6">
      <h1 className="text-[22px] font-semibold text-foreground">Messages</h1>
      <p className="text-muted-foreground text-[15px]">Client messages and communications.</p>
    </div>
    <Card className="border shadow-sm">
      <CardContent className="p-12 text-center">
        <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-[16px] font-semibold text-foreground mb-1">No messages yet</p>
        <p className="text-[14px] text-muted-foreground">Client messages will appear here once integrated with email or SMS.</p>
      </CardContent>
    </Card>
  </AppLayout>
);

export default MessagesPage;
