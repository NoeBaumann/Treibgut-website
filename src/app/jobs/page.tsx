interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  requirements: string[];
}

export default function JobsPage() {
  // This would normally come from the database
  const jobs: Job[] = [
    // Example job if needed:
    {
      id: "1",
      title: "Servicekraft",
      type: "Vollzeit",
      description: "Wir suchen eine freundliche Servicekraft zur Verstärkung unseres Teams.",
      requirements: ["Erfahrung im Service", "Teamfähigkeit", "Deutschkenntnisse"]
    }
  ];

  return (
    <div className="bg-coastal-grey-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-coastal-grey-800 mb-4">Karriere im Treibgut</h1>
          <p className="text-lg text-coastal-grey-600 max-w-2xl mx-auto">
            Werden Sie Teil unseres Teams und arbeiten Sie in einem der schönsten Restaurants an der Nordsee
          </p>
        </div>

        <div className="space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-sea-blue text-white px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{job.title}</h2>
                <span className="px-3 py-1 bg-white text-sea-blue text-sm font-medium rounded-full">
                  {job.type}
                </span>
              </div>
              <div className="p-6">
                <p className="text-coastal-grey-600 mb-6">{job.description}</p>
                
                <h3 className="text-lg font-medium text-coastal-grey-800 mb-3">Anforderungen:</h3>
                <ul className="list-disc pl-5 text-coastal-grey-600 mb-6">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="mb-1">{req}</li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <button className="bg-sea-blue hover:bg-sea-blue-dark text-white py-2 px-6 rounded transition-colors">
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-coastal-grey-800 mb-4 text-center">Initiativbewerbung</h2>
          <p className="text-coastal-grey-600 mb-6 text-center">
            Keine passende Stelle dabei? Wir freuen uns auch über Ihre Initiativbewerbung!
          </p>
        </div>
      </div>
    </div>
  );
}   