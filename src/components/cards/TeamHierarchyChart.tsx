"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FacultyMember } from "@/data/about";

interface TeamHierarchyChartProps {
  members: FacultyMember[];
}

interface TreeNode extends FacultyMember {
  children: TreeNode[];
}

interface FlatNode {
  member: FacultyMember;
  depth: number;
}

// Theme-friendly accent palette (cycled per node, not the black-theme neon set)
const ACCENTS = [
  { text: "text-[#5b6fe8]", avatar: "bg-[#5b6fe8]", bar: "bg-[#5b6fe8]", hex: "#5b6fe8" },
  { text: "text-[#2e9e6b]", avatar: "bg-[#2e9e6b]", bar: "bg-[#2e9e6b]", hex: "#2e9e6b" },
  { text: "text-[#e6a417]", avatar: "bg-[#e6a417]", bar: "bg-[#e6a417]", hex: "#e6a417" },
  { text: "text-[#e15a2e]", avatar: "bg-[#e15a2e]", bar: "bg-[#e15a2e]", hex: "#e15a2e" },
  { text: "text-[#c23bd8]", avatar: "bg-[#c23bd8]", bar: "bg-[#c23bd8]", hex: "#c23bd8" },
  { text: "text-[#0f9bab]", avatar: "bg-[#0f9bab]", bar: "bg-[#0f9bab]", hex: "#0f9bab" },
];

function buildTree(members: FacultyMember[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  members.forEach((m) => map.set(m.id, { ...m, children: [] }));

  const roots: TreeNode[] = [];
  map.forEach((node) => {
    if (node.reportsTo && map.has(node.reportsTo)) {
      map.get(node.reportsTo)!.children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

// Depth-first flatten: parent always appears immediately before its children,
// so a single vertical line down this list reads as the correct hierarchy.
function flattenTree(nodes: TreeNode[], depth = 0): FlatNode[] {
  const result: FlatNode[] = [];
  nodes.forEach((node) => {
    result.push({ member: node, depth });
    result.push(...flattenTree(node.children, depth + 1));
  });
  return result;
}

function NodeCard({
  member,
  colorIndex,
  variant,
}: {
  member: FacultyMember;
  colorIndex: number;
  variant: "tree" | "timeline";
}) {
  const accent = ACCENTS[colorIndex % ACCENTS.length];

  // Every desktop-tree card (any level) uses this exact same fixed size.
  // Mobile timeline cards stay full-width to fill their grid column.
  const widthClasses =
    variant === "timeline" ? "w-full" : "w-[210px] sm:w-[220px] md:w-[230px] lg:w-[230px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[#0f2b2e]/10 bg-white shadow-[0_1px_3px_rgba(15,43,46,0.08)] transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(15,43,46,0.12)] ${widthClasses} ${
        variant === "tree" ? "sm:h-[168px]" : ""
      }`}
    >
      <span className={`absolute inset-x-0 top-0 h-[3px] ${accent.bar}`} />

      <div className="flex items-start gap-2.5 px-3.5 pb-3 pt-4">
        <div
          className={`relative h-13 w-13 shrink-0 overflow-hidden rounded-full ${accent.avatar} ring-2 ring-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
        >
          {member.image ? (
            <Image src={member.image} alt={member.name} fill sizes="40px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="truncate text-[13px] font-bold leading-tight text-[#0f2b2e]">
            {member.name}
          </p>
          <p
            className={`mt-1 line-clamp-2 font-mono text-[11px] font-semibold uppercase tracking-wide ${accent.text}`}
            dangerouslySetInnerHTML={{ __html: member.title }}
            />
        </div>
      </div>

      {member.bio && (
        <p className="line-clamp-3 border-t border-[#0f2b2e]/8 px-3.5 py-2.5 text-[13px] leading-relaxed text-[#0f2b2e]/60">
          {member.bio}
        </p>
      )}
    </motion.div>
  );
}

function TreeLevel({ nodes, colorOffset = 0 }: { nodes: TreeNode[]; colorOffset?: number }) {
  return (
    <ul className="faculty-org-tree flex justify-center">
      {nodes.map((node, i) => (
        <li key={node.id} className={nodes.length === 1 ? "only-child" : ""}>
          <NodeCard member={node} colorIndex={colorOffset + i} variant="tree" />
          {node.children.length > 0 && (
            <TreeLevel nodes={node.children} colorOffset={colorOffset + i + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileTimeline({ flat }: { flat: FlatNode[] }) {
  return (
    <ul className="mobile-org-tree">
      {flat.map(({ member }, i) => {
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <li key={member.id} style={{ display: "contents" }}>
            <div className="dot-col">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="dot"
                style={{ backgroundColor: accent.hex }}
              />
            </div>
            <NodeCard member={member} colorIndex={i} variant="timeline" />
          </li>
        );
      })}
    </ul>
  );
}

export default function TeamHierarchyChart({ members }: TeamHierarchyChartProps) {
  const tree = buildTree(members);
  const flat = flattenTree(tree);

  return (
    <div className="w-full">
      {/* Mobile: single vertical trunk, cards in hierarchical (parent-before-children) order — unchanged */}
      <div className="px-1 sm:hidden">
        <MobileTimeline flat={flat} />
      </div>

      {/* Desktop / tablet: full branching org-chart, every card same fixed size, capped width, centered.
          scrollbar-hide = safety net: if a row is ever wider than the container it scrolls
          instead of clipping, but the scrollbar stays invisible. */}
      <div className="scrollbar-hide mx-auto hidden max-w-6xl overflow-x-auto px-2 sm:block">
        <TreeLevel nodes={tree} />
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* ---- Mobile vertical timeline (unchanged) ---- */
        .mobile-org-tree {
          position: relative;
          display: grid;
          grid-template-columns: 24px 1fr;
          column-gap: 12px;
          row-gap: 16px;
          align-items: center;
        }
        .mobile-org-tree::before {
          content: "";
          position: absolute;
          left: 11px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: rgba(15, 43, 46, 0.22);
          z-index: 0;
          animation: faculty-line-grow-v 0.8s ease forwards;
          transform-origin: top;
        }
        .mobile-org-tree .dot-col {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
        }
        .mobile-org-tree .dot {
          display: inline-block;
          height: 12px;
          width: 12px;
          border-radius: 9999px;
          box-shadow: 0 0 0 4px #f1efe9;
        }

        /* ---- Desktop branching org-chart ---- */
        .faculty-org-tree,
        .faculty-org-tree ul {
          display: flex;
          justify-content: center;
          padding-top: 28px;
          position: relative;
        }
        .faculty-org-tree li {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          position: relative;
          padding: 28px 12px 0 12px;
        }
        .faculty-org-tree li::before,
        .faculty-org-tree li::after {
          content: "";
          position: absolute;
          top: 0;
          right: 50%;
          border-top: 2px solid rgba(15, 43, 46, 0.22);
          width: 50%;
          height: 28px;
          animation: faculty-line-fade 0.6s ease forwards;
          opacity: 0;
        }
        .faculty-org-tree li::after {
          right: auto;
          left: 50%;
          border-left: 2px solid rgba(15, 43, 46, 0.22);
        }
        .faculty-org-tree li:only-child::after,
        .faculty-org-tree li:only-child::before {
          display: none;
        }
        .faculty-org-tree li:only-child {
          padding-top: 0;
        }
        .faculty-org-tree li:first-child::before,
        .faculty-org-tree li:last-child::after {
          border: 0 none;
        }
        .faculty-org-tree li:last-child::before {
          border-right: 2px solid rgba(15, 43, 46, 0.22);
          border-radius: 0 6px 0 0;
        }
        .faculty-org-tree li:first-child::after {
          border-radius: 6px 0 0 0;
        }
        .faculty-org-tree ul::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          border-left: 2px solid rgba(15, 43, 46, 0.22);
          width: 0;
          height: 28px;
          animation: faculty-line-grow 0.5s ease forwards;
        }

        @keyframes faculty-line-fade {
          to {
            opacity: 1;
          }
        }
        @keyframes faculty-line-grow {
          from {
            height: 0;
          }
          to {
            height: 28px;
          }
        }
        @keyframes faculty-line-grow-v {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}