import { SocialProfile } from "./components/SocialProfile/SocialProfile"

function App() {
  return (
    <>
      <main className="flex-grow flex justify-center items-center bg-red-300 p-4">
        <div className="bg-slate-500 rounded-lg p-5 min-w-80 flex flex-col gap-5">
          <div className="flex flex-col justify-center items-center bg-blue-200 gap-3">
            <a href="#">
              <div className="bg-red-300 rounded-full w-16 h-16"></div>
            </a>

            <div className="flex flex-col justify-center items-center">
              <div className="font-bold">Daniel</div>
              <div className="text-center">Descrição</div>
            </div>
          </div>

          <div className="flex flex-col bg-blue-300">
            <ul className="flex flex-col gap-3">
              <li className="bg-gray-300 rounded-lg p-3 flex flex-row gap-3 hover:bg-slate-100 cursor-pointer">
                <a href="#" className="text-green-400 w-full flex flex-row gap-3">
                  Link 1
                </a>
              </li>
              <li className="bg-gray-300 rounded-lg p-3 flex flex-row gap-3 hover:bg-slate-100 cursor-pointer">
                <a href="#" className="text-green-400 w-full flex flex-row gap-3">
                  Link 2
                </a>
              </li>
              <li className="bg-gray-300 rounded-lg p-3 flex flex-row gap-3 hover:bg-slate-100 cursor-pointer">
                <a href="#" className="text-green-400 w-full flex flex-row gap-3">
                  Link 3
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col bg-purple-300 p-3">
            footer
          </div>
        </div>
      </main>

      <footer className="flex flex-row justify-center items-center p-3">
        <p className="text-center">
          Desenvolvido por <a href="https://github.com/danielcosta0701">Daniel Costa</a>
        </p>
      </footer>
    </>
  )
}

export default App
