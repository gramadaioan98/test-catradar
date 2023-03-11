<template>
  <div class="">
    <div>
      <div class="max-w-[500px] border-2 border-b mx-auto flex flex-col gap-5 p-5" v-if="!isSave">
        <div>
          <div v-for="item in arrayMessageSite" :key="item.message">
            <div v-if="item.messageSite">

              <div class="message-site bg-primary text-white rounded-full px-2 py-2">{{ item.messageSite }}
              </div>
            </div>
            <div v-if="item.messageMe">

              <div class="flex justify-end">
                <div class="message-site bg-secondary rounded-full px-2 py-2 text-black">{{ item.messageMe }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="inputSetMessage" class="flex justify-end">
          <div id="wave">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
        <div v-if="contorMessage == 3">
          <div class="grid grid-cols-2 gap-10 ">
            <div class="bg-primary py-3 cursor-pointer text-center font-bold text-white" @click=saveMessages>Yes</div>
            <div class="bg-red-700 py-3 cursor-pointer text-center font-bold text-white" @click="emaiInvalid">No</div>
          </div>
        </div>
        <div v-if="ifBackMessage && !inputSetMessage" @click="backMassage"
          class="flex items-center gap-2 text-primary font-bold cursor-pointer"><svg width="18" height="10"
            viewBox="0 0 18 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-0f1ddf80="">
            <path
              d="M0.221786 4.38818L3.84152 0.253397C4.05818 0.00597783 4.38397 -0.0680242 4.66702 0.065888C4.95006 0.1998 5.13464 0.515264 5.13471 0.865219V3.48559C5.13471 3.60507 5.21951 3.70193 5.32411 3.70193H16.1363C16.7639 3.70193 17.2727 4.2831 17.2727 5C17.2727 5.7169 16.7639 6.29807 16.1363 6.29807H5.32411C5.21951 6.29807 5.13471 6.39493 5.13471 6.51441V9.13478C5.13464 9.48474 4.95006 9.8002 4.66702 9.93411C4.38397 10.068 4.05818 9.99402 3.84152 9.7466L0.221786 5.61182C-0.0739594 5.27389 -0.0739594 4.72611 0.221786 4.38818Z"
              fill="currentColor" data-v-0f1ddf80=""></path>
          </svg>Previous question</div>
        <div class="mt-2 flex gap-5 items-center">
          <input type="text" v-model="inputSetMessage" placeholder="Type here..."
            class="border-2 rounded-full p-2 w-full">
          <div class="text-primary rounded-full cursor-pointer" @click="addItem(inputSetMessage)">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
              class="bi bi-send-plus-fill" viewBox="0 0 16 16">
              <path
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              <path
                d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </div>
        </div>
        <div v-if="errorMessage" class="text-red-800 text-center">
          <p>{{ errorMessage }}</p>
        </div>
      </div>
      <div v-else>
        <h3 class="text-center text-2xl font-bold my-3">Message Send</h3>
      </div>
    </div>

    <div class="max-w-[500px] mx-auto mt-20">
      <div class=" text-2xl text-center mb-4">Previous Message</div>
      <div v-for="item in storageMessage" :key="item">
        <div v-if="item.messageSite">
          <div class="message-site bg-primary text-white rounded-full px-2 py-2">{{ item.messageSite }}
          </div>
        </div>
        <div v-if="item.messageMe">

          <div class="flex justify-end">
            <div class="message-site bg-secondary rounded-full px-2 py-2 text-black">{{ item.messageMe }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  data() {
    return {
      contorMessage: 1,
      isSave: false,
      errorMessage: '',
      inputSetMessage: '',
      emailAddress: '',
      ifBackMessage: false,
      storageMessage: [],
      arrayMessageSite: [
        {
          messageSite: "What is your missing cat's name?",
        },
      ],
    }
  },
  mounted() {
    const data = localStorage.getItem("chatHistory");
    if (data) {
      this.storageMessage = JSON.parse(data);
      console.log(this.test)
    }
  },
  methods: {
    saveMessages() {
      localStorage.setItem('chatHistory', JSON.stringify(this.arrayMessageSite));
      this.isSave = true;
    },
    emaiInvalid() {
      this.ifBackMessage = true;
      this.contorMessage = 2;
      this.arrayMessageSite.splice(3, 2);
    },

    backMassage() {

      this.ifBackMessage = false;
      this.contorMessage--;
      this.arrayMessageSite.splice(-2, 2);
    },
    addItem(text) {

      if (text) {
        if (this.contorMessage == 2) {
          console.log(`The email address is ${this.isEmailValid ? "valid" : "invalid"}.`);
          if (this.isEmailValid) {
            this.errorMessage = '';
            this.arrayMessageSite.push({ messageMe: text },);
            this.emailAddress = text;
            this.inputSetMessage = '';
            this.contorMessage++;
            this.ifBackMessage = false;
          } else {
            this.errorMessage = 'The mail address is invalid';
          }
        }

        if (this.contorMessage == 3) {
          this.arrayMessageSite.push({ messageSite: `Is this email address correct? : ${this.emailAddress}` },);
        }

        if (this.contorMessage == 1) {
          this.arrayMessageSite.push({ messageMe: text },);
          this.inputSetMessage = '';
          this.ifBackMessage = true;
        }
        if (this.contorMessage == 1) {
          this.arrayMessageSite.push({ messageSite: 'On which email address would you like to receive messages about the search for asdas?' },);
          this.contorMessage++;
        }


      }

    }
  },
  computed: {
    isEmailValid() {
      const emailTest = /\S+@\S+.\S+/;
      return emailTest.test(this.inputSetMessage);
    },
  },
}
</script>