import React from 'react';
import cursed_welcome from './art_images/cursed_welcome.jpg'

class App extends React.Component {
    render() {
      return (
          <div class="flex items-center" className="welcome-page">
              <div class="md:flex md:items-center text-center">
                <div class="md:flex md:pl-2" className="welcome-greeting">
                    <p class="pl-4 text-3xl font-mono text-blue-gray md:pb-8">
                        Greetings traveller...
                    </p>
                    <div>
                        <button class="text-7xl font-mono bg-white hover:text-black text-gray-500">
                            art
                        </button>
                    </div>
                    <div>
                        <button class="text-7xl font-mono bg-white hover:text-black text-gray-500">
                            contact
                        </button>
                    </div>
                </div>
                <img class="md:object-right mx-auto h-auto" src={cursed_welcome} alt="cursed_welcome" />
              </div>
          </div>
      );
    }
  }

export default App;