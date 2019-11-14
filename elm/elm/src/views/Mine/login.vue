<template>
    <div class="loginbox">
        <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
        <div class="main">
            <form action="">
                <div class="phonebox">
                    <input class="phone" type="text" placeholder="手机号码">
                    <input class="submit" type="text" placeholder="获取验证码">
                    
                </div>
                <input class="password" type="text" placeholder="验证码">
                <div class="write">
                    <span>新用户登录即自动注册，并表示已同意<a href="">《用户服务协议》</a>和<a href="">《隐私权政策》</a></span>
                </div>

                <div class="button">
                    <button>登录</button>
                </div>
                <div class="my">
                    <a href="">关于我们</a>
                </div>
            </form>            
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .loginbox{
        img{
            margin:0 auto;
            height:56px;
            width:130px;
            margin-top:30px;

        }
        .main{
            input::-webkit-input-placeholder{
                    color:#999;
                    font-size: 14px;
                }
            .phonebox{
                overflow: hidden;
                height:50px;
                width:300px;
                margin:0 auto;
                margin-top:15px;
                border:1px solid #ddd;
                border-radius: 5px;
                .phone{
                    display: inline-block;
                    width:220px;
                    height:50px;
                    color:#999;
                    
                }
                .submit{
                    display: inline-block;
                    width:76px;
                    height:50px;
                    color:#ddd;
                    
                }
            }            
            .password{
                border-radius: 5px;
                display: block;
                height:50px;
                width:300px;
                margin:0 auto;
                border:1px solid #ddd;
                margin-top:15px;
                color:#999;
            }
            .write{
                width:300px;
                margin:0 auto;
                margin-top:15px;
                color:#999;
                a{
                    color:#2395ff
                }
            }
            .button{
                height:45px;
                width:300px;
                border-radius:10px;
                margin:0 auto;
                margin-top:40px;
                button{
                    height:45px;
                    width:300px;                   
                    background:#4cd96f;
                    border-radius: 10px;
                    color:#fff;
                    font-size: 16px;
                } 
            }
            .my{
                padding-top:20px;
                width:300px;
                margin:0 auto;
                text-align: center;
                a{
                    color:#999;
                }

            }
            
            
        }
        
    }

</style>