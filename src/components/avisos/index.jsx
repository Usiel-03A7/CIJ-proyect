import React from "react"
import './avisos.css'
export default function Avisos() {
  return (
    <div className="avisos" id="anuncios">
      <div className="avisos_info">
        <h2>Aviso de este mes dia, mes y año</h2>
        <p> La función principal de un texto informativo es, como indica su nombre, informar, dar a conocer algo. Para ello, presenta un hecho real de la forma más objetiva posible, y contiene ideas ordenadas, claras y bien explicadas que le permiten al lector un mejor entendimiento de la realidad mostrada.</p>
      </div>

      <div className="">
        <img src="./flyer.jpeg" alt="flyer" />
      </div>
    </div>
  )
}