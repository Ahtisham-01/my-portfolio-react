// Original and the models by Bruno Simon: https://threejs-journey.com

import { render } from 'react-dom'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './index.css'
import App from './App'
import React from 'react';
render(
  <>
    <Suspense fallback={null}>

      <App />
      
    </Suspense>
    <Loader />
  </>,
  document.getElementById('root'),
)
