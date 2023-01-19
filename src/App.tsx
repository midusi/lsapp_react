import React from "react"
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Hello world!</div>,
	},
	{
		path: "/1",
		element: <div>Hello world 1!</div>,
	},
])

function App() {
	return (
		<RouterProvider router={router}/>
	)
}

export default App
