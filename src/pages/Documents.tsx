import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

const DocumentsPage = () => (
  <AppLayout>
    <div className="mb-6">
      <h1 className="text-[22px] font-semibold text-foreground">Documents</h1>
      <p className="text-muted-foreground text-[15px]">Manage client and policy documents.</p>
    </div>
    <Card className="border shadow-sm">
      <CardContent className="p-12 text-center">
        <FolderOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-[16px] font-semibold text-foreground mb-1">Document Storage</p>
        <p className="text-[14px] text-muted-foreground">Upload and manage documents once storage is enabled.</p>
      </CardContent>
    </Card>
  </AppLayout>
);

export default DocumentsPage;
