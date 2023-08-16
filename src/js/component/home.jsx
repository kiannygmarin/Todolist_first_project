import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState(["lavar el carro", "ir al cine"])

	const handleInput = (e) => {
		let texto = e.target.value
		if (e.keyCode == 13) {
			setTarea(texto)
			setLista([...lista, texto])
		}
	}

	const deleteTask = (index) => {
		let tempArr = lista.slice()
		tempArr = tempArr.filter((item, index2) => { return index2 != index })
		setLista(tempArr)
	}

	return (
		<>
			<div className="text-center">
				{/* <input placeholder="Escriba aquí una tarea"
					onKeyUp={
						(e) => { handleInput(e) }
					}

				/> */}

			</div>
			<div className="container md mt-3 pt-5" style={{width: "18rem"}}>
			<input placeholder="Escriba aquí una tarea"
					onKeyUp={
						(e) => { handleInput(e) }
					}

				/>
				<div>
				La lista de tareas es:
				</div>
				<ul className="list-group list-group-numbered shadow p-3 mb-5 bg-body rounded">
					{
						lista && lista.length > 0 ?
							<>{
								lista.map((item, index) => {
									return <li key={index}>
										{item}
										<button type="button" onClick={e => { deleteTask(index) }}>
											❌
										</button>
									</li>
								})
							}</>
							: "la lista está vacía"
					}
				</ul>
			</div>
			<div>
				{/* La lista de tareas es:
				<ul className="list-group list-group-numbered shadow p-3 mb-5 bg-body rounded">
					{
						lista && lista.length > 0 ?
							<>{
								lista.map((item, index) => {
									return <li key={index}>
										{item}
										<button type="button" onClick={e => { deleteTask(index) }}>
											❌
										</button>
									</li>
								})
							}</>
							: "la lista está vacía"
					}
				</ul> */}
			</div>
		</>
	);
};

export default Home;
