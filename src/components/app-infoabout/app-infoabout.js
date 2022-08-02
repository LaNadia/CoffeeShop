import '../for-your-pleasure-page/for-your-pleasure-page.css'
import '../our-coffee-page/our-coffee-page.css'


const AppInfoAbout = (props) => {
    const {password} = props;

    if (password == 'pleasure') {
        return (
            <div className='pleasure-info__wrapper'>
            <div className="pleasure-info">
                <img src="/img/img_pleasure.svg" alt='coffee_pleasure' className="pleasure-info__img"/>
                <div>
                    <h2 className="info-abouttext">About our goods</h2>
                    <div className="info-about">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection  <br /> do intention so questions.  <br />
                        As greatly removed calling pleased improve an. 
                        Last ask him cold feel  <br /> met spot shy want. Children me laughing we  <br />prospect answered followed. At it went  <br />
                        is song that held help face.</p>
                    </div>
                </div>
            </div>
            </div>
        )
    };

    if (password == 'goodPage') {
        return (
            <div className='pleasure-info__wrapper'>
            <div className="pleasure-info">
          <img src="/img/img_ourCoffee.svg" alt='our_coffee' className="pleasure-info__img"/>
                <div>
                  <h2 className="info-abouttext">About our goods</h2>
                  <div className="info-about">
                      <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                      <p>Afraid at highly months do things on at. Situation recommend objection  <br /> do intention so questions.  <br />
                      As greatly removed calling pleased improve an. 
                      Last ask him cold feel  <br /> met spot shy want. Children me laughing we  <br />prospect answered followed. At it went  <br />
                      is song that held help face.</p>
                  </div>
            </div>
          </div>
          </div>
        )
    };
}

export default AppInfoAbout;