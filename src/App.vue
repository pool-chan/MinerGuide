<template>
  <div id="app">
    <Modal v-if="layout.modal.status" />
    <Header />
    <transition name="action">
      <Setup v-if="currentAction === 'setup'" />
      <Guides v-if="currentAction === 'guide'" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/header'
import Setup from './components/setup/default'
import Guides from './components/guide/default'
import Footer from './components/layout/footer'
import Modal from './components/layout/modal'

import 'normalize.css'
import './assets/css/pool-chan.scss'
import './assets/css/style.scss'
import './assets/css/Spoqa-Han-Sans.css'
import './assets/css/fontawesome-all.min.css'

export default {
  name: 'MinerGuide',
  components: {
    Header,
    Setup,
    Guides,
    Footer,
    Modal
  },
  data () {
    return {
      Lang: 'ko',
      currentAction: 'setup',
      setup: {
        currentStep: 0,
        availableCPUThread: 1,
        usingCPUThread: []
      },
      layout: {
        modal: {
          status: true,
          action: 'help'
        }
      },
      result: {
        OS: undefined,
        CPUAffinity: 0,
        pool: {
          url: undefined,
          worker: undefined,
          password: undefined
        }
      }
    }
  }
}
</script>
