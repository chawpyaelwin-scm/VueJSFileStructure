<template>
  <div class="forms">
    <el-row>
      <el-col :span="14" :offset="5">
        <el-form :model="form" ref="items" label-width="120px" :hide-required-asterisk="true">
          <el-form-item style="margin-top:2rem">
            <strong>Registration Form</strong>
          </el-form-item>
          <el-form-item label="Name" prop="name" :rules="[{ required: true, message: 'required' }]">
            <el-input placeholder="Please fill your name" v-model="form.name" class="e-input"></el-input>
            <span class="require-message">required</span>
          </el-form-item>
          <el-form-item
            label="Address"
            prop="address"
            :rules="[{ required: true, message: 'required' }]"
          >
            <el-input placeholder="Please fill your address" v-model="form.address" class="e-input"></el-input>
            <span class="require-message">required</span>
          </el-form-item>
          <el-form-item
            label="Phone"
            prop="phone"
            :rules="[{ required: true, message: 'required' }]"
          >
            <el-input placeholder="Please fill your phone" v-model="form.phone" class="e-input"></el-input>
            <span class="require-message">required</span>
          </el-form-item>
          <el-form-item label="DOB" prop="DOB" :rules="[{ required: true, message: 'required' }]">
            <el-input placeholder="Please fill your DOB" v-model="form.DOB" class="e-input"></el-input>
            <span class="require-message">required</span>
          </el-form-item>
          <el-form-item>
            <el-button @click="create(form)" type="primary">Create</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  mounted() {},
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        DOB: ""
      }
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({})
  },
  methods: {
    create() {
      this.$refs.items.validate(valid => {
        if (valid) {
          const { $router } = this;
          this.$store.commit("user/setUserInput", this.form);
          this.$notify({
            title: "Success",
            message: "Register Successful !",
            duration: 2000,
            type: "success"
          });
          this.$router.push("/userlist");
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.forms .el-form-item {
  margin-bottom: 38px !important;
}
.forms .el-form-item__label {
  line-height: 40px !important;
  padding-left: 35px !important;
}
.forms .el-form-item__label {
  text-align: left !important;
  color: #2c3e50;
}
.forms
  .el-form-item.is-required:not(.is-no-asterisk)
  > .el-form-item__label:before {
  content: none !important;
}
.forms .el-form-item__error {
  top: 2.6rem !important;
}
</style>
<style scoped>
.forms {
}
.formContainer {
  margin-bottom: 25px;
}
.e-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 90%;
}
@media (max-width: 1024px) {
  .e-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 85%;
  }
}
.require-message {
  color: #f56c6c;
  float: right;
}
</style>
