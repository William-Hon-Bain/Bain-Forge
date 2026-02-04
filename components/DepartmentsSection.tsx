const departments = ['TSG', 'Finance', 'Consulting', 'PEG', 'BCN'];

export default function DepartmentsSection() {
  return (
    <div className="w-full h-full px-8 py-6">
      <h2 className="text-2xl font-bold text-white mb-6">Departments</h2>
      <div className="flex gap-4 h-[calc(100%-4rem)]">
        {departments.map((dept) => (
          <div
            key={dept}
            className="flex-1 bg-[#1a1a1a] border-2 border-gray-800 hover:border-red-600/50 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-white">{dept}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
