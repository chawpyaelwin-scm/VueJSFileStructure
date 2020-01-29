 <template>
  <div>
    <el-button style="margin:1rem" @click="addUser()" type="primary" round>NEW</el-button>
    <el-table :data="userlist" style="width: 100%">
      <el-table-column prop="id" label="User ID"></el-table-column>
      <el-table-column prop="name" label="Date"></el-table-column>
      <el-table-column prop="address" label="Address"></el-table-column>
      <el-table-column prop="phone" label="Phone"></el-table-column>
      <el-table-column prop="DOB" label="Date Of Birth"></el-table-column>
    </el-table>
  </div>
</template>

  <script>
import { mapState, mapGetters } from "vuex";
import UserUsecase from "@/usecases/user.usecase";
export default {
  mounted() {},
  async created() {
    this.userlist = await this.userUsecase.getUser();
    console.log("USER LIST",this.userlist);

  },
  data() {
    return {
      userUsecase: new UserUsecase(),
      userlist: []
    };
  },
  computed: {
    ...mapState({}),
    ...mapGetters({})
  },
  methods: {
    addUser() {
      this.$router.push("/createForm");
    }
  }
};
</script>
