import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../components/Assets/Frame.svg';
import MytypedComponent from '../../components/sub-components/typing-effect/typed.jsx';
import './home.css';

export default function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="Homepage">
      <div className="h-left">
        <h1>Type-writer : </h1>
        <h1>Start documentating</h1>
        <MytypedComponent />
        <div className='main'>
        <Link to="/main">
          <button>
            Start Using <i class="fas fa-chevron-right"></i>
          </button>
        </Link>
        </div>
        <Link to="/user">
          <button>
            Login <i class="fas fa-chevron-right"></i>
          </button>
        </Link>
        <Link to="/register">
          <button>
            New user <i class="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
