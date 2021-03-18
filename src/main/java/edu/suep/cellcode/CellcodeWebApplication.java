package edu.suep.cellcode;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * create by chenxichao
 */
@SpringBootApplication
@EnableTransactionManagement
public class CellcodeWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(CellcodeWebApplication.class,args);
    }
}
