import React from 'react';
import bg from '../../components/Assets/Frame.svg';
import { Link } from 'react-router-dom';
import MytypedComponent from '../../components/sub-components/typing-effect/typed.jsx';
import './home.css';

export default function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="Homepage">
      <div className="h-left">
        <h1>Type-writer : </h1>
        <h1>Start documentating</h1>
        <MytypedComponent />
        <Link to="/user">
          <button>
            Start here <i class="fas fa-chevron-right"></i>
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
