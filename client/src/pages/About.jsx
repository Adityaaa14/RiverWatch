import "./About.css";

function About() {
  return (
    <div class="backg">
      <div class="start">
        <h1 class="head">About our Project</h1>
      </div>
      <p class="para">
        Our project provides river water quality data from sensors deployed on rivers across various regions
        in the state of Uttar Pradesh. The categorization of the sensors is based on the table below-
      </p>
      <div class="main-div">
        <div class="green">
          <h1>
            PRIMARY WATER QUALITY CRITERIA FOR DESIGNATED - BEST - USE - CLASSES
          </h1>
        </div>
        <div class="flex1">
          <div class="classi">Classification</div>
          <div class="cat">Category</div>
          <div class="tol">Tolerance Limit</div>
        </div>
        <div class="flex2">
          <div class="center classi left">
            Drinking Water Source without conventional treatment but after
            disinfections
          </div>
          <div class="center cat mid">A (green)</div>
          <div class="center tol right">
            <ol>
              <li>1. Total Coliform Organism MPN/100 ml shall be 50 or less</li>
              <li>2. pH between 6.5 and 8.5</li>
              <li>3. Dissolved Oxygen 6mg/l or more</li>
              <li>4. Biochemical oxygen demand 5 days 20o C 2mg/l or less</li>
            </ol>
          </div>
        </div>
        <div class="flex2">
          <div class="center classi left">Outdoor Bathing (Organized)</div>
          <div class="center cat mid">B (yellow)</div>
          <div class="center tol right">
            <ol>
              <li>
                1. Total Coliforms Organism MPN/100 ml shall be 500 or less
              </li>
              <li>2. pH between 6.5 and 8.5</li>
              <li>3. Dissolved Oxygen 5mg/l or more</li>
              <li>4. Biochemical Oxygen Demand 5 days 20oC 3mg/l or less</li>
            </ol>
          </div>
        </div>
        <div class="flex2">
          <div class="center classi left">
            Drinking Water source after conventional treatment and disinfections
          </div>
          <div class="center cat mid">C (blue)</div>
          <div class="center tol right">
            <ol>
              <li>
                1. Total Coliforms Organism MPN/100 ml shall be 5000 or less
              </li>
              <li>2. pH between 6.5 and 8.5</li>
              <li>3. Dissolved Oxygen 4mg/l or more</li>
              <li>4. Biochemical Oxygen Demand 5 days 20oC 3mg/l or less</li>
            </ol>
          </div>
        </div>
        <div class="flex2">
          <div class="center classi left">
            Propagation of Wild Life and Fisheries
          </div>
          <div class="center cat mid">D (orange)</div>
          <div class="center tol right">
            <ol>
              <li>1. pH between 6.5 and 8.5</li>
              <li>2.Dissolved Oxygen 4mg/l or more</li>
              <li>3.Free Ammonia ( as N )1.2 mg/l or less</li>
              {/* <li>
                    4.Biochemical Oxygen Demand 5 days 20oC 3mg/l or less
                    </li> */}
            </ol>
          </div>
        </div>
        <div class="flex2">
          <div class="center classi left last">
            Irrigation Industrial Cooling, Controlled waste disposal{" "}
          </div>
          <div class="center cat mid last">E (red)</div>
          <div class="center tol right last">
            <ol>
              <li>1. pH between 6.0 and 8.5</li>
              <li>2.Electrical Conductivity at 25oC micro mhos/cm Max. 2250</li>
              <li>3.Sodium absorption ratio Max. 26</li>
              <li>4.Boron Max. 2 mg/l</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
