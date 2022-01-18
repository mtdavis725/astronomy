import exampleImage from './../example.jpg'

export default function LandingPage () {
  const today = new Date().toISOString().slice(0, 10);
  
  return(
    <div className="landing-page">
      <div className="item-1">
        <h1>Astronomy Picture of the Day</h1>
      </div>

      <div className="item-2">
        <div className="date">
          <h2>{today}</h2>
        </div>
        <div className="title">
          <h2>Founding Titan Cosmos</h2>
          <h3><span>Credits:</span> Eren Yeager</h3>
        </div>
        <div className="description">
          <p><span>Explanation:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, deleniti id perferendis nesciunt temporibus corporis, quasi, accusantium quaerat quia iure consequuntur natus vitae. Similique eius labore eos minima cum quas quo eligendi libero sint voluptate? Perferendis, nemo! Quos, iusto inventore. Voluptatibus laborum non provident tempora placeat, distinctio possimus? Corporis, quia!</p>
        </div>
        
      </div>

      <div className="item-3">
        <img src={exampleImage} alt="Astronomy Picture of the Day" />
      </div>
    </div>

    
  )
}