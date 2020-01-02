(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{296:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"本页目录"}},[s._v("本页目录")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#本页目录"}},[s._v("本页目录")])]),n("li",[n("a",{attrs:{href:"#制作-centos6-9-镜像"}},[s._v("制作 CentOS6.9 镜像")]),n("ul",[n("li",[n("a",{attrs:{href:"#sshd-服务"}},[s._v("sshd 服务")])])])]),n("li",[n("a",{attrs:{href:"#制作-centos7-7-1908-镜像"}},[s._v("制作 CentOS7.7.1908 镜像")]),n("ul",[n("li",[n("a",{attrs:{href:"#sshd-服务"}},[s._v("sshd 服务")])])])])])]),n("p"),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("h4",{attrs:{id:"非-root-用户-请添加-sudo"}},[s._v("非 root 用户 请添加 sudo")])]),s._v(" "),n("h2",{attrs:{id:"制作-centos6-9-镜像"}},[s._v("制作 CentOS6.9 镜像")]),s._v(" "),n("h3",{attrs:{id:"sshd-服务"}},[s._v("sshd 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it centos:6.9 /bin/bash")]),s._v("\nUnable to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'centos:6.9'")]),s._v(" locally\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(": Pulling from library/centos\n831490506c47: Pull complete\nDigest: sha256:6fff0a9edc920968351eb357c5b84016000fec6956e6d745f695e5a34f18ecd2\nStatus: Downloaded newer image "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" centos:6.9\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以更新 yum update -y")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + p + q")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker containwe ls -a")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\nb3ca4c2e196c        centos:6.9          "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" minutes ago       Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" minutes                            determined_herschel\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("blockquote",[n("p",[s._v("安装启动 "),n("code",[s._v("sshd")]),s._v(" 服务, 创建 root 密码")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container attach b3ca4c2e196c")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y openssh-server")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nDependency Updated:\n  libblkid.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":2.17.2-12.28.el6_9.2                                          libuuid.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":2.17.2-12.28.el6_9.2\n\nComplete"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/init.d/sshd start")]),s._v("\nGenerating SSH2 RSA "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" key:                              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nGenerating SSH1 RSA "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" key:                              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nGenerating SSH2 DSA "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" key:                              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nStarting sshd:                                             "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  OK  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# passwd")]),s._v("\nChanging password "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user root.\nNew password: "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 123456")]),s._v("\nBAD PASSWORD: it is too simplistic/systematic\nBAD PASSWORD: is too simple\nRetype new password: "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 123456")]),s._v("\npasswd: all authentication tokens updated successfully.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + p + q")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("blockquote",[n("p",[s._v("ssh 连接")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container inspect b3ca4c2e196c | grep IPAddress")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SecondaryIPAddresses"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.3"')]),s._v(",\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.3"')]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@172.17.0.3")]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.17.0.3 (172.17.0.3)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nRSA key fingerprint is SHA256:+IJz6k1mW301Rj92bE6GdbNEIYi8tyUnIHuUKXEPTP8.\nRSA key fingerprint is MD5:c4:1b:06:01:8c:ba:5a:76:e9:17:e1:d2:c3:c0:40:32.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (RSA) to the list of known hosts.\nroot@172.17.0.3'")]),s._v("s password: "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 123456")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hostname")]),s._v("\nb3ca4c2e196c\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@b3ca4c2e196c ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v("\nConnection to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3 closed.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("blockquote",[n("p",[s._v("基于该容器制作镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker commit b3ca4c2e196c ahri/centos6.9_sshd:v1")]),s._v("\nsha256:99a14fc8b15f8ad4bde4c82003add34bbd6f08f666d7b982499bef026aab4f95\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker image ls")]),s._v("\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nahri/centos6.9_sshd   v1                  99a14fc8b15f        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" seconds ago       326MB\nnginx                 latest              231d40e811cd        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         126MB\ncentos                latest              0f3e07c0138f        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago        220MB\ncentos                "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v("                 2199b8eb8390        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" months ago        195MB\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("blockquote",[n("p",[s._v("基于新镜像创建新的容器并 ssh 连接")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container run -d --name my-sshd ahri/centos6.9_sshd:v1 /usr/sbin/sshd -D")]),s._v("\n4bb884dbfc6efbd1a0e8bc167d574cbde10353be3d81c9460e33f0c9e1920a0c\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container ls -a")]),s._v("\nCONTAINER ID        IMAGE                    COMMAND               CREATED             STATUS              PORTS               NAMES\n4bb884dbfc6e        ahri/centos6.9_sshd:v1   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/sbin/sshd -D"')]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" seconds ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" seconds                            my-sshd\nb3ca4c2e196c        centos:6.9               "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" minutes ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("39")]),s._v(" minutes                           determined_herschel\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container inspect 4bb884dbfc6e | grep IPAddress")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SecondaryIPAddresses"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.2"')]),s._v(",\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.2"')]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@172.17.0.2")]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.17.0.2 (172.17.0.2)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nRSA key fingerprint is SHA256:+IJz6k1mW301Rj92bE6GdbNEIYi8tyUnIHuUKXEPTP8.\nRSA key fingerprint is MD5:c4:1b:06:01:8c:ba:5a:76:e9:17:e1:d2:c3:c0:40:32.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (RSA) to the list of known hosts.\nroot@172.17.0.2'")]),s._v("s password: "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 123456")]),s._v("\nLast login: Fri Dec "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":26:18 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" from "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@4bb884dbfc6e ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hostname")]),s._v("\n4bb884dbfc6e\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@4bb884dbfc6e ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v("\nConnection to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.2 closed.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"制作-centos7-7-1908-镜像"}},[s._v("制作 CentOS7.7.1908 镜像")]),s._v(" "),n("h3",{attrs:{id:"sshd-服务-2"}},[s._v("sshd 服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -it centos:7.7.1908 /bin/bash")]),s._v("\nUnable to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'centos:7.7.1908'")]),s._v(" locally\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.7")]),s._v(".1908: Pulling from library/centos\nf34b00c7da20: Pull complete\nDigest: sha256:50752af5182c6cd5518e3e91d48f7ff0cba93d5d760a67ac140e2d63c4dd9efc\nStatus: Downloaded newer image "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" centos:7.7.1908\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + p + q")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container ls -a")]),s._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n7526cbac7019        centos:7.7.1908     "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("         "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" seconds ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(" seconds                           serene_solomon\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("blockquote",[n("p",[s._v("安装启动 "),n("code",[s._v("sshd")]),s._v(" 服务, 创建 root 密码")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container attach 7526cbac7019")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install -y openssh-server")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\nInstalled:\n  openssh-server.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":7.4p1-21.el7\n\nDependency Installed:\n  fipscheck.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":1.4.1-6.el7    fipscheck-lib.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":1.4.1-6.el7    openssh.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":7.4p1-21.el7    tcp_wrappers-libs.x86_64 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":7.6-77.el7\n\nComplete"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir -p /var/run/sshd")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'UseDNS no' >> /etc/ssh/sshd_config")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sed -i -e '/pam_loginuid.so/d' /etc/pam.d/sshd")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'root:123456' | chpasswd")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /usr/bin/ssh-keygen -A")]),s._v("\nssh-keygen: generating new "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" keys: RSA1 RSA DSA ECDSA ED25519\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@7526cbac7019 /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + p + q")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("blockquote",[n("p",[s._v("基于该容器制作镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker commit 7526cbac7019 ahri/centos7.7.1908_sshd:v1")]),s._v("\nsha256:98ceb2ad80caa2a995de0dc552081b2a3a86075c73a8d6fccf70ffd69f6f368a\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker image ls")]),s._v("\nREPOSITORY                 TAG                 IMAGE ID            CREATED             SIZE\nahri/centos7.7.1908_sshd   v1                  98ceb2ad80ca        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" seconds ago       307MB\nahri/centos6.9_sshd        v1                  99a14fc8b15f        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" hours ago        326MB\nnginx                      latest              231d40e811cd        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" weeks ago         126MB\ncentos                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.7")]),s._v(".1908            08d05d1d5859        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago         204MB\ncentos                     latest              0f3e07c0138f        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" months ago        220MB\ncentos                     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v("                 2199b8eb8390        "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" months ago        195MB\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("blockquote",[n("p",[s._v("基于新镜像创建新的容器并 ssh 连接")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container run -d --name my-sshd ahri/centos7.7.1908_sshd:v1 /usr/sbin/sshd -D")]),s._v("\n884b67191506309a67bf3e711b384984ba13b9eee66af05e6df26e593acde614\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container ls -a")]),s._v("\nCONTAINER ID        IMAGE                         COMMAND               CREATED             STATUS              PORTS               NAMES\n884b67191506        ahri/centos7.7.1908_sshd:v1   "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/sbin/sshd -D"')]),s._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" seconds ago       Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" seconds                            my-sshd\n7526cbac7019        centos:7.7.1908               "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("           "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v(" minutes ago      Up "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("38")]),s._v(" minutes                           serene_solomon\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker container inspect 884b67191506 | grep IPAddress")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SecondaryIPAddresses"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.3"')]),s._v(",\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.3"')]),s._v(",\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@172.17.0.3")]),s._v("\nThe authenticity of "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.17.0.3 (172.17.0.3)'")]),s._v(" can"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nECDSA key fingerprint is SHA256:V+23BSRWuYqWhiMIFTrNiEh9zp+i08b15b16GVLaicQ.\nECDSA key fingerprint is MD5:e5:ae:be:8d:ee:d4:10:16:69:81:24:4b:3e:15:5c:cf.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("' (ECDSA) to the list of known hosts.\nroot@172.17.0.3'")]),s._v("s password:\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@884b67191506 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hostname")]),s._v("\n884b67191506\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@884b67191506 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v("\nConnection to "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.17")]),s._v(".0.3 closed.\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("Valine")],1)}),[],!1,null,null,null);t.default=e.exports}}]);