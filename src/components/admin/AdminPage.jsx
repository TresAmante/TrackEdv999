import React from "react"

const AdminPage = () => {
	return (
		<>
			<div className="my-12">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 px-3">
						<div className="bg-gray-200 p-6 rounded-lg shadow-lg">
							<img className="rounded-full w-3/4 mx-auto" alt="Admin" src="" />
							<h5 className="text-center text-xl font-bold mt-4">
								<i className="bi bi-person-circle"></i> Netero Nen Master
							</h5>
							<p className="mt-4 text-center font-semibold">Admin Details:</p>
							<ul className="mt-2 space-y-2">
								<li>Detail 1</li>
								<li>Detail 2</li>
								<li>Detail 3</li>
								<li>Detail 4</li>
								<li>Detail 5</li>
							</ul>
						</div>
					</div>
					<div className="w-full md:w-2/3 px-3">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<h5 className="text-2xl font-bold">Admin Dashboard</h5>
							<hr className="my-4" />
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="bg-gray-100 p-4 rounded-lg shadow">
									<h5 className="text-lg font-bold">Teacher</h5>
									<hr className="my-2" />
									<p className="text-center font-semibold">Total: 50</p>
									<button className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full">
										Manage Teacher
									</button>
								</div>
								<div className="bg-gray-100 p-4 rounded-lg shadow">
									<h5 className="text-lg font-bold">Part-Time Teacher</h5>
									<hr className="my-2" />
									<p className="text-center font-semibold">Total: 50</p>
									<button className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full">
										Manage Part-Timer Teachers
									</button>
								</div>
								<div className="bg-gray-100 p-4 rounded-lg shadow">
									<h5 className="text-lg font-bold">Student</h5>
									<hr className="my-2" />
									<p className="text-center font-semibold">Total: 50</p>
									<button className="bg-green-500 text-white py-2 px-4 rounded mt-4 w-full">
										Manage Students
									</button>
								</div>
							</div>
							<div className="bg-white p-6 mt-6 rounded-lg shadow">
								<h5 className="text-xl font-bold">Analytics</h5>
								<hr className="my-4" />
								<p className="text-center">Chart for Analytics</p>
								<a
									href="#"
									className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
								>
									Go somewhere
								</a>
								<div className="text-gray-500 text-center mt-4">2 days ago</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AdminPage
