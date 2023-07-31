import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [user, setUser] = useState({
    tgelement: "",
    tooltip: "",
    textsize: "",
    padding: "",
    tgcolor: "",
    bgcolor: "",
    arrowwidth: "",
    arrowheight: "",
    cradius: "",
    tooltipwidth: "",
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    var tgelement;
    var padding;
    var textsize;
    var tgcolor;
    var bgcolor;
    var cradius;
    var tooltip;
    if (e.target.name == "tgelement") {
      tgelement = e.target.value;
    }
    if (e.target.name == "textsize") {
      textsize = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.fontSize = textsize + 'px';
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.fontSize = textsize + 'px';
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.fontSize = textsize + 'px';
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.fontSize = textsize + 'px';
      } else {
        document.getElementById("t1").style.fontSize = textsize + 'px';
      }
    }
    if (e.target.name == "tgcolor") {
      tgcolor = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.color = tgcolor;
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.color = tgcolor;
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.color = tgcolor;
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.color = tgcolor;
      } else {
        document.getElementById("t1").style.color = tgcolor;
      }
    }
    if (e.target.name == "bgcolor") {
      bgcolor = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.backgroundColor = bgcolor
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.backgroundColor = bgcolor
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.backgroundColor = bgcolor
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.backgroundColor = bgcolor
      } else {
        document.getElementById("t1").style.backgroundColor = bgcolor;
      }
    }
    if (e.target.name == "cradius") {
      cradius = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.borderRadius = cradius + 'px'
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.borderRadius = cradius + 'px'
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.borderRadius = cradius + 'px'
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.borderRadius = cradius + 'px'
      } else {
        document.getElementById("t1").style.borderRadius = cradius + 'px';
      }
    }
    if (e.target.name == "tooltip") {
      tooltip = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").innerHTML = tooltip;
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").innerHTML = tooltip;
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").innerHTML = tooltip;
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").innerHTML = tooltip;
      } else {
        document.getElementById("t1").innerHTML = tooltip;
      }
    }
    if (e.target.name == "padding") {
      padding = e.target.value;
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.padding = padding + 'px';
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.padding = padding + 'px';
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.padding = padding + 'px';
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.padding = padding + 'px';
      } else {
        document.getElementById("t1").style.padding = padding + 'px';
      }
    }
    if (e.target.name == "tooltipwidth") {
      if (user.tgelement == "b5") {
        document.getElementById("t5").style.width = e.target.value + 'px';
      } else if (user.tgelement == "b2") {
        document.getElementById("t2").style.width = e.target.value + 'px';
      } else if (user.tgelement == "b3") {
        document.getElementById("t3").style.width = e.target.value + 'px';
      } else if (user.tgelement == "b4") {
        document.getElementById("t4").style.width = e.target.value + 'px';
      } else {
        document.getElementById("t1").style.width = e.target.value + 'px';
      }
    }
    if (e.target.name == "arrowwidth" || e.target.name == "arrowheight" ) {
      if(!user.arrowheight){
        user.arrowheight=5;
      }
      if(!user.arrowwidth){
        user.arrowwidth=5;
      }
      if(e.target.name == "arrowwidth")
      {
          user.arrowwidth=e.target.value;
      }
      if(e.target.name == "arrowheight")
      {
          user.arrowheight=e.target.value;
      }
      if (user.tgelement == "b5") {
        document.getElementsByClassName("tooltiptext")[4].style.setProperty('--tooltip-width',user.arrowwidth+'px')
        document.getElementsByClassName("tooltiptext")[4].style.setProperty('--tooltip-height',user.arrowheight+'px')
      } else if (user.tgelement == "b2") {
        document.getElementsByClassName("tooltiptext")[1].style.setProperty('--tooltip-idth',user.arrowwidth+'px')
        document.getElementsByClassName("tooltiptext")[1].style.setProperty('--tooltip-height',user.arrowheight+'px')
      } else if (user.tgelement == "b3") {
        document.getElementsByClassName("tooltiptext")[2].style.setProperty('--tooltip-width',user.arrowwidth+'px')
        document.getElementsByClassName("tooltiptext")[2].style.setProperty('--tooltip-height',user.arrowheight+'px')
      } else if (user.tgelement == "b4") {
        document.getElementsByClassName("tooltiptext")[3].style.setProperty('--tooltip-width',user.arrowwidth+'px')
        document.getElementsByClassName("tooltiptext")[3].style.setProperty('--tooltip-height',user.arrowheight+'px')
      } else {
        document.getElementsByClassName("tooltiptext")[0].style.setProperty('--tooltip-width',user.arrowwidth+'px')
        document.getElementsByClassName("tooltiptext")[0].style.setProperty('--tooltip-height',user.arrowheight+'px')
      }
    }
  }
  return (
    <div>

      <div className='main'>
        <div className='form1'>
          <p>
            Target element
          </p>
          <select className='iii' name='tgelement' value={user.tgelement} onChange={handleChange}>
            <option value="b1" >Button 1</option>
            <option value="b2" >Button 2</option>
            <option value="b3" >Button 3</option>
            <option value="b4" >Button 4</option>
            <option value="b5" >Button 5</option>
          </select>
          <p>
            Tooltip text
          </p>
          <input type="textbox" name="tooltip" className="inputn" value={user.tooltip} onChange={handleChange}></input>
          <div className='mform'>
            <div className='mform1'>
              <p>
                Text Size
              </p>
              <input type="textbox" className="inputs" name="textsize" value={user.textsize} onChange={handleChange}></input>
            </div>
            <div className='mform2'>
              <p>
                Padding
              </p>
              <input type="textbox" name="padding" className="inputs" value={user.padding} onChange={handleChange}></input>
            </div>
          </div>
          <p>
            Target Colour
          </p>
          <input type="textbox" name="tgcolor" className="inputn" value={user.tgcolor} onChange={handleChange}></input>
          <p>
            Background Colour
          </p>
          <input type="textbox" name="bgcolor" className="inputn" value={user.bgcolor} onChange={handleChange}></input>
          <div className='mform'>
            <div className='mform1'>
              <p>
                Arrow Height
              </p>
              <input type="textbox" name="arrowwidth" className="inputs" value={user.arrowwidth} onChange={handleChange}></input>
            </div>
            <div className='mform2'>
              <p>
                Arrow Width
              </p>
              <input type="textbox" name="arrowheight" className="inputs" value={user.arrowheight} onChange={handleChange}></input>
            </div>
          </div>
          <div className='mform'>
            <div className='mform1'>
              <p>
                Corner Radius
              </p>
              <input type="textbox" name="cradius" className="inputs" value={user.cradius} onChange={handleChange}></input>
            </div>
            <div className='mform2'>
              <p>
                Tooltip Width
              </p>
              <input type="textbox" name="tooltipwidth" className="inputs" value={user.tooltipwidth} onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <div className='form2'>
          <div className='buttontop'>
            <button id="b1" className="tooltip"> Button 1<span className="tooltiptext" id='t1'>Tooltip text</span></button>
            <button id="b2" className="tooltip">Button 2<span className="tooltiptext" id='t2'>Tooltip text</span></button>
          </div>
          <div className='buttoncenter'>
            <button id="b3" className="tooltip">Button 3<span className="tooltiptext" id='t3'>Tooltip text</span></button>
          </div>
          <div className='buttonbottom'>
            <button id="b4" className="tooltip">Button 4<span className="tooltiptext" id='t4'>Tooltip text</span></button>
            <button id="b5" className="tooltip">Button 5<span className="tooltiptext" id='t5'>Tooltip text</span></button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
