use jadewebsite;
insert into jadewebsite_menu (id, text, href, parentId) values (1, '软件服务', '#', null);
insert into jadewebsite_menu (id, text, href, parentId) values (2, '加入我们', '#', null);
insert into jadewebsite_menu (id, text, href, parentId) values (3, '产品试用申请表', 'productApply', 1);
insert into jadewebsite_menu (id, text, href, parentId) values (4, '应聘申请表', 'recruitApply', 2);
insert into jadewebsite_menu (id, text, href, parentId) values (5, '用户中心', '#', null);
insert into jadewebsite_menu (id, text, href, parentId) values (6, '账户设置', 'accountSetting', 5);
insert into jadewebsite_menu (id, text, href, parentId) values (7, '登陆日志', 'loginLog', 5);
insert into jadewebsite_menu (id, text, href, parentId) values (8, '招聘表管理', 'recruitManage', 2);


insert into jadewebsite_role (rolename, defaultMenuId) values ('超级管理员', 3);
insert into jadewebsite_role (rolename, defaultMenuId) values ('销售', 3);
insert into jadewebsite_role (rolename, defaultMenuId) values ('人事', 4);

insert into jadewebsite_admin (username, password, roleId) 
	values ('admin', '21232f297a57a5a743894a0e4a801fc3', 1);
insert into jadewebsite_admin (username, password, roleId) 
	values ('sale', 'e70b59714528d5798b1c8adaf0d0ed15', 2);
insert into jadewebsite_admin (username, password, roleId) 
	values ('person', '8b0a44048f58988b486bdd0d245b22a8', 3);
insert into jadewebsite_admin (username, password, roleId)
    values ('sale1', 'e70b59714528d5798b1c8adaf0d0ed15', 2);
insert into jadewebsite_admin (username, password, roleId)
    values ('person2', '8b0a44048f58988b486bdd0d245b22a8', 3);
	
insert into jadewebsite_role_power (roleId, menuId) values (1, 1);
insert into jadewebsite_role_power (roleId, menuId) values (1, 2);
insert into jadewebsite_role_power (roleId, menuId) values (1, 3);
insert into jadewebsite_role_power (roleId, menuId) values (1, 4);
insert into jadewebsite_role_power (roleId, menuId) values (2, 1);
insert into jadewebsite_role_power (roleId, menuId) values (2, 3);
insert into jadewebsite_role_power (roleId, menuId) values (3, 2);
insert into jadewebsite_role_power (roleId, menuId) values (3, 4);
insert into jadewebsite_role_power (roleId, menuId) values (1, 5);
insert into jadewebsite_role_power (roleId, menuId) values (1, 6);
insert into jadewebsite_role_power (roleId, menuId) values (2, 5);
insert into jadewebsite_role_power (roleId, menuId) values (2, 6);
insert into jadewebsite_role_power (roleId, menuId) values (3, 5);
insert into jadewebsite_role_power (roleId, menuId) values (3, 6);
insert into jadewebsite_role_power (roleId, menuId) values (1, 7);
insert into jadewebsite_role_power (roleId, menuId) values (1, 8);
insert into jadewebsite_role_power (roleId, menuId) values (3, 8);


insert into jadewebsite_system (id, systemName) values (1, '精益作业通云服务');
insert into jadewebsite_system (id, systemName) values (2, '医院人事管理系统');
insert into jadewebsite_system (id, systemName) values (3, '政府OA系统');
insert into jadewebsite_system (id, systemName) values (4, '公务活动管理系统');

insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '总经理助理', '1、大学本科或以上学历毕业，有海外学习生活经历；\n2、熟练掌握英文听说读写,可作为办公语言；\n3、熟练应用Office等办公软件；\n4、为人开朗，工作认真负责，具有良好学习能力；\n5、有IT背景者，计算机相关专业优先。', '总经办', 1, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '招聘专员', '1、 教育要求：本科及以上学历；\n2、工作经验：两年以上招聘工作经验；\n3、培训经历：受过现代人力资源管理技术、劳动法律法规等方面的培训；\n4、熟悉计算机操作办公软件及相关的人事管理软件；\n5、能力要求：具备很强的责任感和事业心；有较好的判断能力；性格外向，有良好的职业道德，擅于沟通与协调，良好的团队合作意识；富有热情、积极进取、坚韧不拔，具有较强的沟通影响力；深入了解企业文化及业务知识。', '行政人事部', 1, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', 'java高级程序员', '1、至少3年以上JAVA开发经验，熟悉在Struts、Spring、Hibernate的软件开发；\n2、有良好的沟通能力和团队合作精神，有较强的学习和钻研精神；\n3、熟悉电子政务、BOSS或CRM应用系统优先。', '研发中心', "若干", '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', 'java系统分析师', '1、本科及以上学历，计算机相关专业；\n2、4年以上相关经验，至少2年以上J2EE开发经验；\n3、在J2EE经验丰富，熟悉Spring、Hibernate、ibatis、Struts等开源框架，熟悉HTML JS CSS；\n4、熟悉Oracle开发与设计、UNIX和Windows开发平台，有WebLogic和面向对象开发经验；\n5、具有较强的业务分析能力，中英文沟通能力，逻辑思维能力和文档编写能力。', '研发中心', '若干', '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '软件产品经理', '1、本科及以上学历，计算机相关专业；\n2、5年以上行业工作经验，至少2年以上软件产品研发管理经验；\n3、具有较强的业务分析能力、语言沟通能力、逻辑思维能力和文档编写能力；\n4、热衷于市场调研和产品研发；\n5、了解加工制造业ERP系统者优先。', '研发中心', '若干', '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '实施工程师', '1、计算机或相关专业大专及以上学历，一年以上运维实施工作经验，性格开朗，自信乐观；\n2、熟悉在Linux和Window操作系统下产品安装、现场调试；\n3、熟练计算机基本配件的组装及调试并能排除常见硬件问题；\n4、熟悉主流数据库（Oracle、SQL Server等），具备良好的数据库操作和维护能力；\n5、具有出色的沟通能力与表达能力，能够正确引导用户操作使用软件产品，能够准确地将问题处理方案告知用户，口头汇报问题时，能够清晰、详细的描述用户所反馈问题；\n6、熟悉项目控制与实施流程，具有较强的文档编写能力；\n7、具有较强的责任感，能适应出差，并能承受较大的工作压力；\n8、有OA产品实施经验者优先。', '研发中心', '若干', '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '初级测试工程师', '1、计算机及相关专业本科以上学历；\n2、工作负责、热爱软件测试,有良好的沟通能力和主动学习能力；\n3、有较强的执行力和理解力；\n4、熟知软件测试流程、测试理论和方法；\n5、熟悉Oracle，能够熟练使用SQL语言，了解Liunx、Weblogic、Tomcat， java开发；\n6、了解App、B/S自动化测试，如Appium/Robotium/UIAutomator/Selenium/TestNG等自动化测试框架的实现原理与应用。', '研发中心', '若干', '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '中级测试工程师', '1、计算机及相关专业本科以上学历；\n2、工作负责，热爱软件测试,有良好的沟通能力和主动学习能力；\n3、有较强的执行力和理解力；\n4、熟知软件测试流程、测试理论和方法；\n5、熟悉Oracle、mysql，能够熟练使用SQL语言，了解Liunx、Weblogic、Tomcat， java开发；\n6、熟悉App、B/S自动化测试，如Appium/Robotium/UIAutomator/Selenium/TestNG等自动化测试框架的实现原理与应用；\n7、有人事项目/产品测试经验者优先。', '研发中心', '若干', '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '售前工程师', '1、大专以上学历，计算机相关专业；\n2、2年以上软件行业或互联网行业售前工作经验或3年以上信息化项目实施服务经验，有独立负责售前项目的能力；\n3、熟悉Windows、Linux操作系统，能使用常用Linux操作命令；\n4、熟悉mysql/sqlserver/oracle其中一种，有一定的数据库系统基本管理能力；\n5、具备较好的解决方案技术沟通和演说能力；\6、良好的职业道德，较强的学习能力，工作细心、有责任心、敬业、勤奋，具备较强的抗压能力，适应不定期出差；\n7、具有良好的图文表达能力，逻辑性强，能够熟练应用Word、Excel、Visio、PPT等办公软件；\n8、性格外向、健谈，学习能力强，较强的责任心和团队合作精神；\n9、从事过医疗行业，成功实施过三甲医院人事项目经验者优先。', '营销中心', 2, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '商务助理', '1、熟悉文秘、营销及商务、经济行业的相关知识，亲和力较强，拥有良好的沟通协调能力和团队协作精神，自学能力强，有独立工作的能力，并擅长文字写作。', '营销中心', 2, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '渠道经理', '1、大专或以上学历；\n2、有2年以上代理渠道的发展与管理工作经验；\n3、具备一定的职业素养，性格开朗、外向，能够独立开展工作，善于与人沟通，具备良好沟通能力及表达能力及良好的人际关系处理能力和优秀的谈判技巧，具有团队协作精神，能承受工作压力；\n4、能够快速应公司环境，经过内部培训后对公司产品、操作平台、工作流程等熟悉精通；\n5、根据不同时候客户需求的改变，及时地跟进与更新，密切关注其动态；\n6、积极配合团队计划，有良好的团队合作意识。', '营销中心', 2, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '销售工程师', '1、专科以上学历；\n2、相关工作经验一年以上；\n3、精通计算机软件及应用者优先；\n4、熟悉医院人事业务者优先。', '营销中心', 6, '深圳',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', 'java初级程序员', '1、了解Java编程和J2EE架构，了解面向对象的程序设计和软件工程开发方法；\n2、熟练掌握JSP/Servlet、Struts、XML、HTML、Javascript、Web Service、Spring、Hibernate等技术；\n3、熟练掌握关系数据库（SQL Server/Oracle/MySQL等）开发管理工具；\n4、具有较强的分析和解决问题的能力，能够高质量地独立完成工作；\n5、有良好的团队精神，交流与沟通能力强，能够承受一定工作压力。', '研发中心', '若干', '南京',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', 'java系统分析师', '1、有5年以上的应用软件开发和设计经验，两年以上的Java的系统分析经验，有大型项目开发及设计经验者优先；\n2、精通Java编程，精通Struts、Spring、Hibernate、Web Services、XML；\n3、熟悉电子政务、人事、BOSS或CRM应用系统优先，熟悉迭代开发优先。', '研发中心', '若干', '南京',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '初级测试工程师', '1、计算机及相关专业本科以上学历；\n2、工作负责，热爱软件测试,有良好的沟通能力和主动学习能力。\n3、有较强的执行力和理解力；\n4、熟知软件测试流程、测试理论和方法；\n5、熟悉Oracle，能够熟练使用SQL语言，了解Liunx、Weblogic、Tomcat、 java开发。', '研发中心', '若干', '南京',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '中级测试工程师', '1、计算机及相关专业本科以上学历，熟悉软件测试流程，3年以上软件测试工作经验，1年测试管理经验；\n2、工作认真负责，热爱软件测试,有良好的沟通能力和主动学习能力，有较强的执行力和理解力；\n3、熟悉Oracle、SQL语言，了解java开发、eclipse集成；\n4、熟悉Liunx、Weblogic、Tomcat应用，能够独立搭建测试环境，集成部署，了解配置管理工作；\n5、工作地点：前期在深圳，后期在江苏南京，有志于在江苏长期发展。', '研发中心', '若干', '南京',1);
insert into jadewebsite_recruit_manage (publishDate, positionName, positionRequire, depart, number, address,status)
    values ('2017-11-18', '销售工程师', '1、专科以上学历；\n2、相关工作经验一年以上；\n3、精通计算机软件及应用者优先。', '营销中心', 8, '南京、南宁、衢州',1);