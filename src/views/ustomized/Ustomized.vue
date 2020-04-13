<template>
    <div class="ustomized wrapper">
        <div class="title">请留下您的联系方式，我们会安排工作人员与您沟通。</div>
        <div class="content">
            <table>
                <tbody>
                    <tr>
                        <th>称呼:</th>
                        <td>
                            <input type="text" placeholder="请输入姓名" class="name" />
                            <input type="checkbox" name id />先生
                            <input type="checkbox" name id />女士
                        </td>
                    </tr>
                    <tr>
                        <th>联系方式:</th>
                        <td>
                            <input type="text" placeholder="请输入联系方式" />
                        </td>
                    </tr>
                    <tr>
                        <th>需求详情:</th>
                        <td>
                            <textarea type="text" placeholder="请输入联系方式"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th>&nbsp;</th>
                        <td>
                            <button class="btn btn_orang">提交</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            };
        },
        methods: {}
    };
</script>

<style lang="less" scoped>
    .ustomized {
        background-color: #fff;
        margin: 30px auto;
        padding: 30px;

        .title {
            text-align: center;
            line-height: 30px;
            padding-bottom: 30px;
            font-size: 18px;
            color: #4874a9
        }

        .content {
            width: 700px;
            margin: 0 auto;

            th {
                font-weight: normal;
                text-align: left;
                vertical-align: top;
                padding-top: 20px;
            }

            td {
                padding: 10px 0;

                input.name[type="text"] {
                    width: 200px;
                    margin-right: 20px;
                }

                input[type="text"],
                textarea {
                    width: 100%;
                }

                textarea {
                    height: 200px;
                }
            }
        }
    }
</style>