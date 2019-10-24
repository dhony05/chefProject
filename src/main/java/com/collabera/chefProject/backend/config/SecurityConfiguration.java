package com.collabera.chefProject.backend.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.savedrequest.HttpSessionRequestCache;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.security.web.savedrequest.SavedRequest;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@ComponentScan("com.collabera.config")
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private CustomAccessDeniedHandler accessDeniedHandler;
//    @Autowired
//    private RestAuthenticationEntryPoint restAuthenticationEntryPoint;
    @Autowired
    private SavedRequestAwareAuthSuccessHandler mySuccessHandler;
	private final RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	
	public SecurityConfiguration() {
        super();
        SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);
    }
	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
	    auth.inMemoryAuthentication()
	        .withUser("admin").password(passwordEncoder().encode("adminPass")).roles("ADMIN")
	        .and()
	        .withUser("user").password(passwordEncoder().encode("userPass")).roles("USER");
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// configuration to allow basic authentication and disable CSRF
		http
		.csrf().disable() // needed of @CrossOrigin?
		.exceptionHandling()
        .accessDeniedHandler(accessDeniedHandler())
	    .authenticationEntryPoint(restAuthenticationEntryPoint())
		.and()
		.authorizeRequests()
		.antMatchers("/js/**", "/css/**", "/img/**", "/webjars/**", "/api/**").permitAll() // allow all webjars (bootstrap and jquery), css, images and javascript files without security
//		.antMatchers("/api/admin/**").hasRole("ADMIN")
		.antMatchers("/**").hasRole("USER")// authorize requests only if they are successfully authenticated
		.and().formLogin() // allow form login
		.successHandler(mySuccessHandler) // if login is successful, call the authenticationSuccessHandler method
		.failureHandler(new SimpleUrlAuthenticationFailureHandler())
		.loginPage("/login").permitAll() // show the login page located at /login URL
		.and().logout()
		.and().httpBasic(); // also allow http basic authentication
				
				// Use basic authentication (username/password based) for all authentication purpose
	}
	@Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
	private AuthenticationSuccessHandler authenticationSuccessHandler() {
		return new AuthenticationSuccessHandler() {
			public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
					Authentication authentication) throws IOException, ServletException {
				redirectStrategy.sendRedirect(request, response, "/movie-list"); // redirect to movie list page
			}
		};
	}
	private AuthenticationFailureHandler authenticationFailureHandler() {
		return new AuthenticationFailureHandler() {
			@Override
			public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
					AuthenticationException exception) throws IOException, ServletException {
				redirectStrategy.sendRedirect(request, response, "/login"); // TODO
				
			}
		};
	}
	private AuthenticationEntryPoint restAuthenticationEntryPoint() {
		return new AuthenticationEntryPoint() {
			@Override
			public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception)
					throws IOException, ServletException {
				response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
			}
		};
	}
	private AccessDeniedHandler accessDeniedHandler() {// TODO COPY BAELDUNG AUTH; ENABLE USER ROLE SETTING
		return new AccessDeniedHandler() {
			@Override
		    public void handle(final HttpServletRequest request, final HttpServletResponse response, final AccessDeniedException ex) throws IOException, ServletException {
		        response.getOutputStream().print("Error Message Goes Here");
		        response.setStatus(403);
		        // response.sendRedirect("/my-error-page");
		    }
		};
	}
	@Override
    public void configure(WebSecurity web) {
	// configuration to allow these urls accessed regardless of spring security configurations
        web.ignoring()
            .antMatchers(HttpMethod.OPTIONS, "/**")
            .antMatchers("/app/**/*.{js,html}")
            .antMatchers("/content/**")
            .antMatchers("/swagger-ui/index.html");
    }
 
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		// in memory authentication database with credentials name admin/password
		auth.inMemoryAuthentication()
		.withUser("admin")
		.password(passwordEncoder().encode("password"))
		.roles("USER");
	}
	
	@Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}