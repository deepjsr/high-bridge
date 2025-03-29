import React, { useState } from "react";
import StartNode from "./StartNode";
import EndNode from "./EndNode";
import ActionNode from "./ActionNode";
import NodeConnector from "./NodeConnector";
import AddNodeModal from "./AddNodeModal";
import { NodeType } from "./types";

const FlowBuilder = () => {
  const [nodes, setNodes] = useState([
    { id: "1", type: NodeType.START, label: "Start" },
    { id: "2", type: NodeType.END, label: "End" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insertIndex, setInsertIndex] = useState(null);

  // Track which node types are already in the flow
  const getUsedNodeTypes = () => {
    return nodes.map((node) => node.type);
  };

  const handleAddNode = (index) => {
    setInsertIndex(index);
    setIsModalOpen(true);
  };

  const handleNodeSelect = (nodeType, label) => {
    if (insertIndex !== null) {
      const newNodeId = `node-${Date.now()}`;
      const newNode = { id: newNodeId, type: nodeType, label };

      const updatedNodes = [...nodes];
      updatedNodes.splice(insertIndex, 0, newNode);

      setNodes(updatedNodes);
      setIsModalOpen(false);
      setInsertIndex(null);
    }
  };

  const handleDeleteNode = (id) => {
    setNodes(nodes.filter((node) => node.id !== id));
  };

  return (
    <div className="d-flex flex-column align-items-center p-4  min-vh-100">
      <div className="w-100 max-width-md d-flex flex-column align-items-center">
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            {renderNode(node, handleDeleteNode)}

            {/* Don't show connector after the last node */}
            {index < nodes.length - 1 && (
              <NodeConnector onAdd={() => handleAddNode(index + 1)} />
            )}
          </React.Fragment>
        ))}
      </div>

      <AddNodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleNodeSelect}
        usedNodeTypes={getUsedNodeTypes()}
      />
    </div>
  );
};

const renderNode = (node, onDelete) => {
  switch (node.type) {
    case NodeType.START:
      return <StartNode label={node.label} />;
    case NodeType.END:
      return <EndNode label={node.label} />;
    case NodeType.API_CALL:
    case NodeType.EMAIL:
      return <ActionNode node={node} onDelete={() => onDelete(node.id)} />;
    default:
      return null;
  }
};

export default FlowBuilder;
