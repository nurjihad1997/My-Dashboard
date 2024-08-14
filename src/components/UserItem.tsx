"use client";
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-xl p-2">
      <div className="avatar rounded-full min-h-12 min-w-12 bg-blue-800 text-white font-[700] flex items-center justify-center">
        <p>JF</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Jihad Firman</p>
        <p className="text-[12px] text-gray-400">jihadfirman97@gmail.com</p>
      </div>
    </div>
  );
}
