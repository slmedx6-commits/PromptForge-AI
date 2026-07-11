"use client";

import {
  Copy,
  Pencil,
  RefreshCcw,
  Save,
  Share2,
} from "lucide-react";

interface Props {
  onCopy: () => void;
  onEdit: () => void;
  onReEnhance: () => void;
  onSave: () => void;
  onShare: () => void;
}

export default function ActionToolbar({
  onCopy,
  onEdit,
  onReEnhance,
  onSave,
  onShare,
}: Props) {

  const Button = ({
    icon,
    title,
    onClick,
  }: any) => (
    <button
      title={title}
      onClick={onClick}
      className="rounded-xl p-3 text-gray-400 transition hover:bg-white/10 hover:text-white"
    >
      {icon}
    </button>
  );

  return (
    <div className="mt-5 flex justify-center gap-5">

      <Button
        title="Copy"
        icon={<Copy size={20} />}
        onClick={onCopy}
      />

      <Button
        title="Edit"
        icon={<Pencil size={20} />}
        onClick={onEdit}
      />

      <Button
        title="Re-Enhance"
        icon={<RefreshCcw size={20} />}
        onClick={onReEnhance}
      />

      <Button
        title="Save"
        icon={<Save size={20} />}
        onClick={onSave}
      />

      <Button
        title="Share"
        icon={<Share2 size={20} />}
        onClick={onShare}
      />

    </div>
  );
}