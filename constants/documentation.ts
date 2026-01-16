import {
  Clock,
  Code,
  Database,
  FileText,
  GitBranch,
  Send,
  Zap,
} from "lucide-react";

export const documentation = {
  "trigger-nodes": {
    title: "Trigger Nodes",
    icon: Zap,
    color: "text-yellow-500",
    sections: [
      {
        id: "trigger",
        title: "Trigger Node",
        description: "Manual workflow trigger or entry point for workflows",
        config: {
          triggerType: "manual",
        },
        output: {
          triggered: true,
          timestamp: "2025-01-15T10:30:00.000Z",
          triggerType: "manual",
        },
        expressions: ["{{$input.triggerType}}", "{{$input.timestamp}}"],
      },
      {
        id: "webhook",
        title: "Webhook Node",
        description: "Receive HTTP requests to trigger workflows",
        config: {
          path: "/my-webhook",
          method: "POST",
          authentication: "none",
          responseMode: "firstNode",
        },
        usage: `curl -X POST https://your-domain.com/api/webhooks/workflow123/my-webhook \\
-H "Content-Type: application/json" \\
-d '{"name":"John","email":"john@example.com"}'`,
      },
    ],
  },

  "ai-nodes": {
    title: "AI Nodes",
    icon: Code,
    color: "text-purple-500",
    sections: [
      {
        id: "ai-chat",
        title: "AI Chat Node",
        description: "Interact with AI models for conversations",
        providers: ["OpenAI", "Anthropic", "Groq"],
      },
    ],
  },

  "data-nodes": {
    title: "Data Nodes",
    icon: Database,
    color: "text-blue-500",
    sections: [
      {
        id: "http-request",
        title: "HTTP Request Node",
        description: "Make HTTP requests to APIs",
      },
    ],
  },

  "transform-nodes": {
    title: "Transform Nodes",
    icon: GitBranch,
    color: "text-green-500",
    sections: [
      {
        id: "code",
        title: "Code Node",
        description: "Run custom JavaScript",
      },
    ],
  },

  "flow-nodes": {
    title: "Flow Nodes",
    icon: Clock,
    color: "text-indigo-500",
    sections: [
      {
        id: "delay",
        title: "Delay Node",
        description: "Pause workflow execution",
      },
    ],
  },

  "communication-nodes": {
    title: "Communication Nodes",
    icon: Send,
    color: "text-pink-500",
    sections: [
      {
        id: "email",
        title: "Email Node",
        description: "Send emails",
      },
    ],
  },

  "file-nodes": {
    title: "File Nodes",
    icon: FileText,
    color: "text-cyan-500",
    sections: [
      {
        id: "read-file",
        title: "Read File Node",
        description: "Read files",
      },
    ],
  },
};
